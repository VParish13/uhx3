import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  animations: [
    trigger('slideOut', [
      transition(':enter', [
        style({ transform: 'translateY(-65%)' }),
        animate('100ms', style({ transform: 'translateY(0%)' }))
      ]),

    ])
  ]
})

export class NavMenuComponent {
  atHome = true;

  LeaveHome() {
    this.atHome = false;
  }

  ReturnHome() {
    this.atHome = true;
  }
}

