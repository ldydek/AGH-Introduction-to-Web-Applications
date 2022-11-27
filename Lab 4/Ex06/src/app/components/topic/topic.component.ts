import { Component, Input } from '@angular/core';
import { Topic } from 'src/app/components/topicscard/topic';
import { AdditionalDataService } from 'src/app/services/additional-data.service'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
  @Input() topic: Topic;
  constructor(private additionalDataService: AdditionalDataService) {}

  selectTitle() {
    this.additionalDataService.selectTitle(this.topic);
  }
}
