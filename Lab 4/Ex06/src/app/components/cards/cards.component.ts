import { Component } from '@angular/core';
import { Card } from '../../interfaces/card';
import CardsData from '../../data/data.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  cards: Card[];

  ngOnInit(): void {
    this.cards = CardsData;
  }
}
