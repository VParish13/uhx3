import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CharacterComponent } from './character.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    ScrollingModule
  ],
  declarations: [
    CharacterComponent
  ],
  providers: []
})
export class CharacterModule { }
