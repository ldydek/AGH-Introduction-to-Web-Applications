import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-journey-rating',
  templateUrl: './journey-rating.component.html',
  styleUrls: ['./journey-rating.component.css']
})
export class JourneyRatingComponent {
  rating: number = 0;

  rate(ratingValue: number) {
    this.rating = ratingValue;
  }
}
