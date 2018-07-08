import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {

  tabIndex = 0;

  isSelected(index: number): boolean {
    return this.tabIndex == index;
  };
}
