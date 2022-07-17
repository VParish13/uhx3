import { Component } from '@angular/core';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})

export class CharacterComponent {
  selectTiles: SelectTile[] = [
    { text: 'Char1', cols: 1, rows: 1 },
    { text: 'Char2', cols: 1, rows: 1 },
    { text: 'Char3', cols: 1, rows: 1 },
    { text: 'Char4', cols: 1, rows: 1 }
  ];
}


// Move this somewhere general and call in for each component
// Must have forms capability to display variable text (ex. character name, encounter name, etc.)
export interface SelectTile {
  cols: number;
  rows: number;
  text: string;
}
