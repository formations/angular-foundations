import { Component, OnInit } from '@angular/core';
import { Observable }   from 'rxjs';
import { Comic } from '../model';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  comics$: Observable<Comic[]>;

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.comics$ = this.comicService.getComics();
  }
}
