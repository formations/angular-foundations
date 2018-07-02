import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comic } from './model';
import { COMICS } from './data';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  getComics(): Observable<Comic[]> {
    return of(COMICS);
  }
}
