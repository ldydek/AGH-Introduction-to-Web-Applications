import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Journey } from 'src/app/interfaces/journey';
import { AddJourneyService } from 'src/app/services/add-journey.service';

@Component({
  selector: 'app-adding-journey',
  templateUrl: './adding-journey.component.html',
  styleUrls: ['./adding-journey.component.css']
})
export class AddingJourneyComponent {

  journeyForm : FormGroup;
  newJourney: Journey;

  constructor(private addJourneyService: AddJourneyService) { }

  ngOnInit(): void {
    this.journeyForm = new FormGroup({
      name : new FormControl("",Validators.required),
      country : new FormControl("",Validators.required),
      startDate : new FormControl("",Validators.required),
      endDate : new FormControl("",Validators.required),
      price : new FormControl("",Validators.required),
      tickets : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required),
      image : new FormControl("",Validators.required)
    })
  }

  // reading data from form and assigning them into interface fields
  addJourney() {
    let journey = {
      journeyName : this.journeyForm.get("name")?.value,
      destinationCountry: this.journeyForm.get("country")?.value,
      startDate: this.journeyForm.get("startDate")?.value,
      endDate: this.journeyForm.get("endDate")?.value,
      tourPrice: this.journeyForm.get("price")?.value,
      maxTickets: this.journeyForm.get("tickets")?.value,
      description: this.journeyForm.get("description")?.value,
      previewImage: this.journeyForm.get("image")?.value
    }
    this.addJourneyService.addJourney(journey);
    this.journeyForm.reset();
  }
}
