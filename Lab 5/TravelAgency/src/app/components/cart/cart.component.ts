import { Component } from '@angular/core';
import { CartElement } from 'src/app/interfaces/cartElement';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartElements: CartElement[];
  totalCost: number;

  constructor(private cartService: CartService) { }

  // receiving data from cart service if it has changed
  ngOnInit() {
    this.cartService.cartElementsEventEmitter.subscribe((cartItems: CartElement[]) => this.cartElements = cartItems);
    this.cartService.totalCostEventEmitter.subscribe((totalCost) => this.totalCost = totalCost);
  }

}
