import { Injectable, EventEmitter } from '@angular/core';
import { Journey } from '../interfaces/journey';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  OnAddToCart = new EventEmitter<Journey>();
  OnRemoveFromCart = new EventEmitter<Journey>();

  addToCart(journey: Journey) {
    this.OnAddToCart.emit(journey);
  }

  removeFromCart(journey: Journey) {
    this.OnRemoveFromCart.emit(journey);
  }
}
