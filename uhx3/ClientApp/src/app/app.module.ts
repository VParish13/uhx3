import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AddCharacterComponent } from './character/addCharacter';
import { AddClassComponent } from './class/addClass';
//import { AddEncounterComponent } from './encounter/addEncounter';
//import { AddNpcComponent } from './npc/addNpc';
//import { AddRaceComponent } from './race/addRace';
//import { AddSpell-AbilityComponent } from './spell-ability/addSpell-Ability';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AddCharacterComponent,
    AddClassComponent,
    //AddEncounterComponent,
    //AddNpcComponent,
    //AddRaceComponent,
    //AddSpell-AbilityComponent,
    AppComponent,
    NavMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'AddCharacter', component: AddCharacterComponent },
      { path: 'AddClass', component: AddClassComponent },
      //{ path: 'AddEncounter', component: AddEncounterComponent },
      //{ path: 'AddNpc', component: AddNpcComponent },
      //{ path: 'AddRace', component: AddRaceComponent },
      //{ path: 'AddSpell-Ability', component: AddSpell-AbilityComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
