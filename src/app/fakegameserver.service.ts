import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Gameserver } from './gameserver';

@Injectable({
  providedIn: 'root'
})
export class FakegameserverService implements Gameserver {
  private gamestates: BehaviorSubject<InitialGamestate>;
  constructor() {
    this.gamestates = new BehaviorSubject(new InitialGamestate())
  }

  asObservable() {
    return this.gamestates.asObservable()
  }


}

export function generate_deck(): Record<string, number> {
  const cards: Record<string, number> = { "dog": -1, "mah": 1, phx: 15, drg: 16 }

  let height = 2;
  for (const value of ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]) {

    for (const color of ["s", "d", "j", "p"]) {
      cards[(color + value)] = height
      height += .25
    }
  }
  return cards
}

class InitialGamestate {
  players: string[][];
  player!: number;
  constructor() {
    const deck = Object.keys(generate_deck());
    let p = 0;
    const players: string[][] = [[], [], [], []]
    while (deck.length > 0) {
      const card = pickRandom(deck);
      players[p].push(card)
      if (card === "mah") {
        this.player = p
      }
      p = (p + 1) % 4
    }
    this.players = players
  }
}

function pickRandom<T>(list: Array<T>) {
  const randidx = Math.floor(Math.random() * list.length)
  return list.splice(randidx, 1)[0]
}
