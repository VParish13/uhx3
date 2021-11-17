import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent {
  atHome = true;

  //collapse() {
  //  this.isExpanded = false;
  //}

  //toggle() {
  //  this.isExpanded = !this.isExpanded;
  //}
  LeaveHome() {
    this.atHome = false;
  }

  ReturnHome() {
    console.log('clicked button');
    this.atHome = true;
  }
}

