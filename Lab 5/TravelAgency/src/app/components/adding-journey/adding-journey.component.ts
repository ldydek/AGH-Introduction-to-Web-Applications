import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddJourneyService } from 'src/app/services/add-journey.service';

@Component({
  selector: 'app-adding-journey',
  templateUrl: './adding-journey.component.html',
  styleUrls: ['./adding-journey.component.css']
})
export class AddingJourneyComponent {

  journeyForm : FormGroup;

  constructor(private addJourneyService: AddJourneyService) { }

  // creating a form group
  ngOnInit(): void {
    this.journeyForm = this.addJourneyService.createForm();
  }

  addJourney() {
    this.journeyForm = this.addJourneyService.addJourney(this.journeyForm);
  }
}
