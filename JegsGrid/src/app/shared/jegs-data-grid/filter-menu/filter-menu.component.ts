import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss']
})
export class FilterMenuComponent {
  @ViewChild('filterMenu', { static: true }) public triggerMenu: MatMenuTrigger;
  @Input() openFilter: boolean;

  ngOnChanges() {

    if (this.openFilter) {
      console.log('menus')
      this.triggerMenu.openMenu()
    }
  }
}


