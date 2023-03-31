import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Journey } from 'src/app/interfaces/journey';
import { BasketService } from 'src/app/services/basket-service';


@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  @Input() journey! : Journey;
  @Input() minValue! : Number
  @Input() maxValue! : Number
  @Output() counter : EventEmitter<number> = new EventEmitter()
  @Output() delete : EventEmitter<Journey> = new EventEmitter()
  ticket! : Number
  smallAmountOfTickets! : boolean
  noTickets! : boolean
  fullAmountOfTickets! : boolean
  ticketsNumber! : Number
  edgePrice : Number = 0
  rating: number = 0;
  starCount: number = 5;

  constructor(public basketService: BasketService) {
  }

  ngOnInit(): void {
    this.ticketsNumber = this.journey.maxTickets
    this.ticket = this.journey.maxTickets
    this.boolFunction()
    this.checkPrice()
  }

  add() {
    this.journey.maxTickets--;
    this.boolFunction()
    this.counter.emit(1)
  }

  remove() {
    this.journey.maxTickets++;
    this.boolFunction()
    this.counter.emit(-1)
  }

  boolFunction() {
    this.smallAmountOfTickets = this.journey.maxTickets < 4
    this.noTickets = this.journey.maxTickets == 0
    this.fullAmountOfTickets = this.ticketsNumber == this.journey.maxTickets
  }

  checkPrice() {
    if (this.minValue == this.journey.tourPrice) {
      this.edgePrice = -1
    }
    else if (this.maxValue == this.journey.tourPrice) {
      this.edgePrice = 1
    }
  }

  removeCard() {
    this.delete.emit(this.journey)
  }

  onRatingChanged(rating: number) {
    this.rating = rating;
  }
}
