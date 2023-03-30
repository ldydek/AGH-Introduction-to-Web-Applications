import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card'; 

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  OnLoadDataClicked = new EventEmitter<Card>();

  loadData(card: Card) {
    this.OnLoadDataClicked.emit(card);
  }
}
