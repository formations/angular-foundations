import { Injectable } from '@angular/core';
import { Comic } from './model';
import { COMICS } from './data';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  getComics(): Comic[] {
    return COMICS;
  }
}
