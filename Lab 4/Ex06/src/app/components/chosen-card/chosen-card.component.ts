import { Component } from '@angular/core';
import { Topic } from '../topicscard/topic';
import { AdditionalDataService } from 'src/app/services/additional-data.service';

@Component({
  selector: 'app-chosen-card',
  templateUrl: './chosen-card.component.html',
  styleUrls: ['./chosen-card.component.css']
})
export class ChosenCardComponent {
  selected: boolean = false;
  topic: Topic;

  constructor(private sharedDataService: AdditionalDataService) {
    sharedDataService.selectedTopic$.subscribe(topic => {
      this.selected = true;
      this.topic = topic;
    })
  }
}
