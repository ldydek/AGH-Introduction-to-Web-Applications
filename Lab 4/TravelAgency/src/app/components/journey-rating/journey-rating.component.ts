import { Component } from '@angular/core';

@Component({
  selector: 'app-journey-rating',
  templateUrl: './journey-rating.component.html',
  styleUrls: ['./journey-rating.component.css']
})
export class JourneyRatingComponent {
  // quantity of stars chosen by a user
  rating: number = 0;

  // assigning to rating variable rating (quantity of stars) chosen by a user
  rate(ratingValue: number) {
    this.rating = ratingValue;
  }
}
