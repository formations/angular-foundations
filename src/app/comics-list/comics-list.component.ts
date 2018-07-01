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
    this.comics = COMICS.sort(this.byTitle);
  }

  ngOnInit() {
    this.subscription = this.tabService.titleChanged$.subscribe(
      title => {
        if (title == null) {
          this.comics = COMICS.sort(this.byTitle);
        } else {
          this.comics = COMICS.filter(comic => comic.title.indexOf(title) > -1)
                              .sort(this.byTitle);
        }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private byTitle = (comic1, comic2) => {
    let byTitle = comic1.title.localeCompare(comic2.title);
    if (byTitle == 0) {
      return comic1.issueNumber - comic2.issueNumber;
    }
    return byTitle;
  }
}
