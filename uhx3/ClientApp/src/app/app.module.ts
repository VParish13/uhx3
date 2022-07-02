import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSliderModule } from '@angular/material';

import { CharacterComponent } from './character';
import { AddCharacterComponent } from './character/addCharacter';
import { AddClassComponent } from './class/addClass';
import { EncounterComponent } from './encounter';
//import { AddNpcComponent } from './npc/addNpc';
//import { AddRaceComponent } from './race/addRace';
//import { AddSpell-AbilityComponent } from './spell-ability/addSpell-Ability';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCharacterComponent,
    AddClassComponent,
    EncounterComponent,
    //AddNpcComponent,
    //AddRaceComponent,
    //AddSpell-AbilityComponent,
    CharacterComponent,
    NavMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Character', component: CharacterComponent },
      { path: 'AddClass', component: AddClassComponent },
      { path: 'Encounter', component: EncounterComponent },
      //{ path: 'AddNpc', component: AddNpcComponent },
      //{ path: 'AddRace', component: AddRaceComponent },
      //{ path: 'AddSpell-Ability', component: AddSpell-AbilityComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
