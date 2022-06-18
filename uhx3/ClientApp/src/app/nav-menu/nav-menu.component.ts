import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  animations: [
    trigger('slideOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('100ms', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})

export class NavMenuComponent {
  atHome = true;

  LeaveHome() {
    setTimeout(() => {
      this.atHome = false;
    }, 200)
  }

  ReturnHome() {
    this.atHome = true;
  }
}

