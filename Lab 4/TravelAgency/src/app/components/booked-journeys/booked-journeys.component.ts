import { Component } from '@angular/core';
import { BookJourneyService } from 'src/app/services/book-journey.service';

@Component({
  selector: 'app-booked-journeys',
  templateUrl: './booked-journeys.component.html',
  styleUrls: ['./booked-journeys.component.css']
})
export class BookedJourneysComponent {

  bookedJourneys: number = 0;

  constructor(private bookJourneyService: BookJourneyService) { }

  // receiving booked journey from single journey via service
  ngOnInit(): void {
    // "one" is either 1 or -1 integer
    this.bookJourneyService.onJourneyBooked.subscribe((one: number) => {
      this.bookedJourneys += one;
    })
  }
}
