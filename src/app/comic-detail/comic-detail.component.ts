import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from '../model';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  comic: Comic;

  constructor(private route: ActivatedRoute,
              private comicService: ComicService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.comicService.getComic(id).subscribe(comic => this.comic = comic);
  }
}
