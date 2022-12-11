import { Component, EventEmitter, OnInit } from '@angular/core';
import { Journey } from 'src/app/interfaces/journey';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent implements OnInit {
  journeys: Journey[] = [];
  value1 = Infinity
  value2 = -Infinity
  counter: number = 0
  removeEvent: EventEmitter<any> = new EventEmitter();

  constructor(private dataBaseService: DataBaseService) {
    // dataBaseService.initdada()
    dataBaseService.getData().subscribe({
      next : data => this.getData(data),
      error : () =>  console.log("BŁĄD")
    })
  }

  ngOnInit(): void {
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

  add(value: number) {
    this.counter = this.counter + value
  }

  removeJourney(journey: Journey) {
    this.dataBaseService.removeData(journey.key)
    this.value1 = Infinity
    this.value2 = -Infinity
    this.find_max()
    this.find_min()
    this.removeEvent.emit()
  }

  getData(data : any[]) {
    this.journeys = []
    data.forEach(record => {
      let journey = record.payload.val()
      journey.key = record.key
      this.journeys.push(journey)
    })
    this.find_max()
    this.find_min()
  }
}
