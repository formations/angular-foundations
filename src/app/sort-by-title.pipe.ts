import { Pipe, PipeTransform } from '@angular/core';
import { Comic} from './model';

@Pipe({
  name: 'sortByTitle'
})
export class SortByTitlePipe implements PipeTransform {

  transform(comics: Comic[]): Comic[] {
    return comics.sort(this.byTitle);
  }

  private byTitle = (comic1, comic2) => {
      let byTitle = comic1.title.localeCompare(comic2.title);
      if (byTitle == 0) {
        return comic1.issueNumber - comic2.issueNumber;
      }
      return byTitle;
    }
}
