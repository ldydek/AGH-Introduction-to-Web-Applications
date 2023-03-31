import { Component, OnInit } from '@angular/core';
import journeysData from '../../data/journeys.json';
import { Journey } from 'src/app/interfaces/journey';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent implements OnInit {
  journeys: Journey[] = journeysData;
  value1 = Infinity
  value2 = -Infinity
  counter : number = 0
  journeyForm! : FormGroup

  ngOnInit(): void {
    this.find_max()
    this.find_min()
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

  find_max() {
    this.journeys.forEach((j) => {
      if (j.tourPrice > this.value2) {
        this.value2 = j.tourPrice
      }
    })
  }

  find_min() {
    this.journeys.forEach((j) => {
      if (j.tourPrice < this.value1) {
        this.value1 = j.tourPrice
      }
    })
  }

  add(value:number) {
    this.counter = this.counter + value
  }

  removeJourney(journey : Journey) {
    this.journeys = this.journeys.filter(j => j != journey)
  }

  addJourney() {
    let name = this.journeyForm.get("name")?.value
    let country = this.journeyForm.get("country")?.value
    let startDate = this.journeyForm.get("startDate")?.value
    let endDate = this.journeyForm.get("endDate")?.value
    let price = this.journeyForm.get("price")?.value
    let tickets = this.journeyForm.get("tickets")?.value
    let description = this.journeyForm.get("description")?.value
    let image = this.journeyForm.get("image")?.value
    let journey = {
      tourName : name,
      destinationCountry: country,
      startDate: startDate,
      endDate: endDate,
      tourPrice: price,
      maxTickets: tickets,
      description: description,
      previewImage: image
    }
    this.journeys.push(journey)
    this.journeyForm.reset()
  }
}
