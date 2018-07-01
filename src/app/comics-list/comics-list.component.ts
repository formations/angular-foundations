import { Component } from '@angular/core';
import { SimpleComic } from '../model';
import { COMIC } from '../data';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent {

  comic: SimpleComic = COMIC;
}
