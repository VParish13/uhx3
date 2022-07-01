import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  animations: [
    trigger('slideOut', [
      transition(':enter', [
        style({ transform: 'translateY(-70%)' }),
        animate('100ms', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('100ms', style({ transform: 'translateX(100%)' }))
      ])
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

