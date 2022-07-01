import { Component } from '@angular/core';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'character',
  templateUrl: './Character.component.html',
  styleUrls: ['./Character.component.css']
})

export class CharacterComponent {
  tiles: any[] = [
    { text: 'One', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
  ];
}
