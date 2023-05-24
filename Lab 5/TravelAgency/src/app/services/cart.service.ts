import { EventEmitter, Injectable } from '@angular/core';
import { Journey } from '../interfaces/journey';
import { CartElement } from '../interfaces/cartElement';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartElements: CartElement[] = [];
  totalCost: number = 0;

  // event emitters which pass data to cart component (current cart elements and total price for them)
  cartElementsEventEmitter = new EventEmitter<CartElement[]>;
  totalCostEventEmitter = new EventEmitter<number>;

  constructor() { }

  // adding new trip to the cart
  addToCart(journey: Journey) {
    const newCartElement = { journeyName: journey.journeyName, quantity: 1 };
    let index = this.checkAvailability(newCartElement);
    if (index == -1) {
      this.cartElements.push(newCartElement);
    }
    else {
      this.cartElements[index].quantity++;
    }
    this.totalCost += journey.tourPrice;
    this.cartElementsEventEmitter.emit(this.cartElements);
    this.totalCostEventEmitter.emit(this.totalCost);
  }

  // removing chosen trip from the cart
  removeFromCart(journey: Journey) {
    const newCartElement = { journeyName: journey.journeyName, quantity: 1 };
    let index = this.checkAvailability(newCartElement);
    if (index == -1) {
      return;
    }
    if (this.cartElements[index].quantity == 1) {
      this.cartElements.splice(index, 1);
    }
    else {
      this.cartElements[index].quantity--;
    }
    this.totalCost -= journey.tourPrice;
    this.cartElementsEventEmitter.emit(this.cartElements);
    this.totalCostEventEmitter.emit(this.totalCost);
  }

  // checking whether this cart element exists in a cart
  // returns index of this element if it is present or -1
  private checkAvailability(cartElement: CartElement): number {
    return this.cartElements.findIndex((journey) => journey.journeyName === cartElement.journeyName);
  }
}
