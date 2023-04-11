import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Journey } from '../../interfaces/journey';
import { BookJourneyService } from 'src/app/services/book-journey.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent {
  @Input() journey: Journey;
  @Input() minPrice: number;
  @Input() maxPrice: number;
  // receiving from a parent minimum and maximum prices of entire trip list

  // output for removing entire tour and notifying parent component
  @Output() onDeleteJourney: EventEmitter<Journey> = new EventEmitter();

  maxTickets: number;

  constructor(private bookJourneyService: BookJourneyService, private cartService: CartService) { }

  ngOnInit(): void {
    this.maxTickets = this.journey.maxTickets;
  }

  // decreases number of remaining available reservations and increases number of your booked trips
  addReservation(): void {
    if (this.journey.maxTickets > 0) {
      this.journey.maxTickets--;
      this.bookJourneyService.bookJourney(1);
    }
  }

  // increases number of remaining available reservations and decreases number of your booked trips
  removeReservation(): void {
    if (this.journey.maxTickets < this.maxTickets) {
      this.journey.maxTickets++;
      this.bookJourneyService.bookJourney(-1);
    }
  }

  // removes entire tour from a list
  removeJourney(): void {
    this.onDeleteJourney.emit(this.journey);
  }

  // adds journey to the common cart
  addToCart() {
    this.cartService.addToCart(this.journey);
  }

  // removes journey from a common cart
  removeFromCart() {
    this.cartService.removeFromCart(this.journey);
  }
}
