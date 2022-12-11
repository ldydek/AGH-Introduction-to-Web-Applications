import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Journey } from 'src/app/interfaces/journey';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.css']
})
export class JourneyDetailsComponent {
  journey: Journey = new Journey()

  constructor(private route: ActivatedRoute, private dataBaseService: DataBaseService) {
    route.params.subscribe(params => {
      this.dataBaseService.getSingleJourney(params['id']).subscribe({
        next : data => {
          this.journey = data
          this.journey.key = params['id']
        }
      })
    })
  }
}
