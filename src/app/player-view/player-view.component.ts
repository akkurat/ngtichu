import { Component, Input, numberAttribute, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakegameserverService, generate_deck } from '../fakegameserver.service';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.scss']
})
export class PlayerViewComponent implements OnInit, OnDestroy {

  @Input({ required: true, transform: numberAttribute })
  pidx!: number

  subs: Subscription[] = [];
  myturn = false

  constructor(private gs: FakegameserverService) { }

  ngOnInit(): void {
    this.subs.push(this.gs.asObservable().subscribe(v => {
      if (v.player == this.pidx) {
        this.myturn = true
      }
      this.cards = v.players[this.pidx].sort(card_sort)
    }))
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
  }
  cards?: string[];
}
const lookup = generate_deck()
function card_sort(a: string, b: string): number {
  return lookup[a] - lookup[b]
}




