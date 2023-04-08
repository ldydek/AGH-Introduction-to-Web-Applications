import { EventEmitter, Injectable } from '@angular/core';
import { Journey } from '../interfaces/journey';

@Injectable({
  providedIn: 'root'
})
export class AddJourneyService {

  constructor() { }

  OnAddJourneyClicked = new EventEmitter<Journey>();

  addJourney(journey: Journey) {
    this.OnAddJourneyClicked.emit(journey);
  }
}
