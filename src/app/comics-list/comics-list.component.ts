import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs';
import { Comic } from '../model';
import { COMICS } from '../data';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnDestroy, OnInit {

  comics: Comic[];
  subscription: Subscription;

  constructor(private tabService: TabService) {
    this.comics = COMICS;
  }

  ngOnInit() {
    this.subscription = this.tabService.titleChanged$.subscribe(
      title => {
        if (title == null) {
          this.comics = COMICS;
        } else {
          this.comics = COMICS.filter(comic => comic.title.indexOf(title) > -1)
        }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
