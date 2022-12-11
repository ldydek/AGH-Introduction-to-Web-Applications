import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.getPosts();
  }
}
