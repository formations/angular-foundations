import { Component } from '@angular/core';
import { Comic } from '../model';
import { COMICS } from '../data';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent {

  comics: Comic[] = COMICS;
}
