import { Component } from '@angular/core';
import { SimpleComic } from '../model';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent {

  comic: SimpleComic = {
    id: 21464,
    title: 'Powers (2000)',
    issueNumber: 18,
    thumbnail: 'image/image_not_available.jpg',
    price: 3.45,
    description: 'Walker and Pilgrim investigate the death of a member of FG-3, a federally employed and corporate funded trio. Evidence leads Walker to believe a federal cover-up is taking place, and as the investigation spirals out of control both professionally and personally (Zora is killed during a confrontation with FG-3), Walker leaves the police force after exposing the cover-up on television.'
  }
}
