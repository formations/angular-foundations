import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private titleChangedSource = new Subject<string>();

  titleChanged$ = this.titleChangedSource.asObservable();

  changeTitle(title: string) {
    this.titleChangedSource.next(title);
  }
}
