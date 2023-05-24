import { EventEmitter, Injectable } from '@angular/core';
import { Journey } from '../interfaces/journey';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import journeys from '../data/journeys.json';

@Injectable({
  providedIn: 'root'
})
export class AddJourneyService {

  constructor() { }

  // sharing data from adding journey component to journeys component
  OnAddJourneyClicked = new EventEmitter<Journey>();

  createForm() : FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*'), this.validateJourneyExists.bind(this)]),
      country: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      startDate: new FormControl("", Validators.required),
      endDate: new FormControl("", Validators.required),
      price: new FormControl("", [Validators.required, Validators.min(0)]),
      tickets: new FormControl("", [Validators.required, Validators.min(0)]),
      description: new FormControl("", Validators.required),
      image: new FormControl("", Validators.required)
    });
  }

  // checking whether journey with given name already exists
  validateJourneyExists(name: FormControl): { [key: string]: any } | null {
    let journeyName = name.value.toLowerCase();
    let matchingJourney = journeys.some(journey => journey.journeyName.toLowerCase() == journeyName);
    if (!matchingJourney) {
      return null;
    } else {
      return { journeyExists: true };
    }
  }

  // reading data from form and assigning them into interface fields
  addJourney(journeyForm: FormGroup): FormGroup {
    let newJourney = {
      journeyName : journeyForm.get("name")?.value,
      destinationCountry: journeyForm.get("country")?.value,
      startDate: journeyForm.get("startDate")?.value,
      endDate: journeyForm.get("endDate")?.value,
      tourPrice: journeyForm.get("price")?.value,
      maxTickets: journeyForm.get("tickets")?.value,
      description: journeyForm.get("description")?.value,
      previewImage: journeyForm.get("image")?.value
    }
    this.OnAddJourneyClicked.emit(newJourney);
    journeyForm = this.createForm();
    return journeyForm;
  }
}
