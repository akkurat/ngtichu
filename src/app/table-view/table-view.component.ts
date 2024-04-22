import { Component } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  moves: { player: number; cards: string[]; }[];
  constructor() {
    this.moves = [
      { player: 0, cards: ["s3", "d3"] },
      { player: 1, cards: ["j8", "d8"] }
    ]
  }

}
