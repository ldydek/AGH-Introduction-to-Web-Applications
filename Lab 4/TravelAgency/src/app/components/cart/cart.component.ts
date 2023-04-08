import { Component } from '@angular/core';
import { CartElement } from 'src/app/interfaces/cartElement';
import { Journey } from 'src/app/interfaces/journey';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService) { }

  cart: CartElement[] = [];
  totalCost: number = 0;

  ngOnInit(): void {
    this.cartService.OnAddToCart.subscribe((journey: Journey) => {
      this.addJourney(journey);
    })
    this.cartService.OnRemoveFromCart.subscribe((journey: Journey) => {
      this.removeJourney(journey);
    })
  }

  // checking whether this cart element exists in a cart
  checkAvailability(cartElement: CartElement): number {
    return this.cart.findIndex((journey) => journey.journeyName === cartElement.journeyName);
    // returns index of this element if it is present or -1
  }

  // adding new trip to the cart
  addJourney(journey: Journey): void {
    const newCartElement = {journeyName: journey.journeyName, quantity: 1};
    let index = this.checkAvailability(newCartElement);
    if (index == -1) {
      this.cart.push(newCartElement);
    }
    else {
      this.cart[index].quantity++;
    }
    this.totalCost += journey.tourPrice
  }

  // removing chosen trip from the cart
  removeJourney(journey: Journey): void {
    const newCartElement = {journeyName: journey.journeyName, quantity: 1};
    let index = this.checkAvailability(newCartElement);
    if (index == -1) {
      return;
    }
    if (this.cart[index].quantity == 1) {
      this.cart.splice(index, 1);
    }
    else {
      this.cart[index].quantity--;
    }
    this.totalCost -= journey.tourPrice;
  }
}
