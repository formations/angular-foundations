import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription }   from 'rxjs';
import { map }   from 'rxjs/operators';
import { Comic } from '../model';
import { TabService } from '../tab.service';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnDestroy, OnInit {

  comics$: Observable<Comic[]>;
  subscription: Subscription;

  constructor(private tabService: TabService,
              private comicService: ComicService) { }

  ngOnInit() {
    this.subscription = this.tabService.titleChanged$.subscribe(
      title => {
        if (title == null) {
          this.comics$ = this.comicService.getComics();
        } else {
          this.comics$ = this.comicService.getComics().pipe(map(
            comics => {
              return comics.filter(comic => comic.title.indexOf(title) > -1)
          }));
        }
    });
    this.comics$ = this.comicService.getComics();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
