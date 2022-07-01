import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { CharacterComponent } from './character.component';

@NgModule({
  imports: [
    CommonModule
    ,MatGridListModule
  ],
  declarations: [
    CharacterComponent
  ],
  providers: []
})
export class CharacterModule { }
