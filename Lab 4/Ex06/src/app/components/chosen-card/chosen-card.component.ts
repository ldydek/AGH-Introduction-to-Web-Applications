import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-chosen-card',
  templateUrl: './chosen-card.component.html',
  styleUrls: ['./chosen-card.component.css']
})
export class ChosenCardComponent {

  constructor(private cardService: CardService) {}

  card: Card;

  ngOnInit(): void {
    this.cardService.OnLoadDataClicked.subscribe((data: Card) => {
      this.card = data;
    })
  }
}
