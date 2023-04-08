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

  ngOnInit(): void {
    this.bookJourneyService.onJourneyBooked.subscribe((one: number) => {
      this.bookedJourneys += one;
    })
  }
}
