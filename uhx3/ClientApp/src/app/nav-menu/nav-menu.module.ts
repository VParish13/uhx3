import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
  ],
  declarations: [
    NavMenuComponent
  ],
  providers: []
})
export class NavMenuModule { }
