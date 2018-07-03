import { Component, OnInit } from '@angular/core';
import { Comic } from '../model';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  comic: Comic;

  ngOnInit() {
  }
}
