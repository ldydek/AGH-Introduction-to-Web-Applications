import { Component } from '@angular/core';
import { Topic } from "../topicscard/topic"

@Component({
  selector: 'app-topicscard',
  templateUrl: './topicscard.component.html',
  styleUrls: ['./topicscard.component.css']
})
export class TopicscardComponent {
  topics: Topic[] = [
    {
        name: "The Basics",
        content: "Core Angular basics you should know"
    },
    {
        name: "Components",
        content: "Components are core concept for building Angular UIs and apps"
    },
    {
        name: "Events",
        content: "Events are important in Angular"
    }
  ]
}
