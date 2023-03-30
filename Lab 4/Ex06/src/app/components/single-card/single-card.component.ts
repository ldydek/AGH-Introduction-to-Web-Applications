import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  @Input() card: Card;

  constructor(private cardService: CardService) {} 

  loadData(card: Card) {
    this.cardService.loadData(card);
  }
}
