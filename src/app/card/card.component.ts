import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  cardcode = '';

  cardsrc?: string
  high = false
  selected = false
  click(ev: MouseEvent): void {
    if( ev.type == "mousedown")
    {
      this.high = true 
    }
    else if( ev.type == "click")
    {
      this.selected = !this.selected
    }
    else
    {
      this.high = false
    }
  }

  ngOnInit(): void {
    this.cardsrc = '/assets/cards/' + this.cardcode + '.png'
  }


}
