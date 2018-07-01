import { Component } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {

  tabIndex = 0;

  constructor(private tabService: TabService) { }

  isSelected(index: number): boolean {
    return this.tabIndex == index;
  };

  select(index: number): void {
    this.tabIndex = index;
    let title: string;
    switch(index) {
      case 0: {
        title = null;
        break;
      }
      case 1: {
        title = 'Powers';
        break;
      }
      case 2: {
        title = 'Chewbacca';
        break;
      }
      case 3: {
        title = 'Ultimate Spider-Man';
        break;
      }
    }
    this.tabService.changeTitle(title);
  }
}
