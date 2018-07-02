import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map }   from 'rxjs/operators';
import { Comic, MarvelResponse } from './model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(private http: HttpClient) { }

  getComics(): Observable<Comic[]> {
    return this.http.get<MarvelResponse>(`${environment.baseUrl}/v1/public/comics?limit=50&apikey=${environment.apiKey}`)
      .pipe(map(response => response.data.results));
  }
}
