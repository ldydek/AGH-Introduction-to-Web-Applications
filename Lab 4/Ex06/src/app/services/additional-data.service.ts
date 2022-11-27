import { Injectable } from '@angular/core';
import { Topic } from "../components/topicscard/topic";
import { Topics } from "./data"
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionalDataService {
  
  private selectedTopic = new Subject<Topic>();
  private topics: Topic[] = Topics;
  constructor() { }

  selectedTopic$ = this.selectedTopic.asObservable();
  
  selectTitle(topic: Topic) {
    this.selectedTopic.next(topic);
  }
  getTitles(): Topic[] {
    return this.topics;
  }
}
