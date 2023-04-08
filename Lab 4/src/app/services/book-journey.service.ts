import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookJourneyService {

  constructor() { }

  onJourneyBooked: EventEmitter<number> = new EventEmitter();

  bookJourney(one: number) {
    this.onJourneyBooked.emit(one);
  }
}
