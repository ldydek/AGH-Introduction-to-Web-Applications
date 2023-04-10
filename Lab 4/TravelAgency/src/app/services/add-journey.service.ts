import { EventEmitter, Injectable } from '@angular/core';
import { Journey } from '../interfaces/journey';

@Injectable({
  providedIn: 'root'
})
export class AddJourneyService {

  constructor() { }

  OnAddJourneyClicked = new EventEmitter<Journey>();

  // passes data from add-journey to journeys component via service
  addJourney(journey: Journey) {
    this.OnAddJourneyClicked.emit(journey);
  }
}
