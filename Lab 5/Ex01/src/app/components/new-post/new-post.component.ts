import { Component } from '@angular/core';
import { DataService } from "../../services/data-service";
import { Post } from "../../interfaces/post";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor(public data: DataService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  post = this.formBuilder.group({
    userId: [0, [Validators.required, Validators.min(0)]],
    title: ['', Validators.required],
    body: ['', Validators.required]
  });

  addPost(post: any) {
    const newPost: Post = {
      id: this.data.posts.map(post => post.id).sort((a, b) => b - a)[0] + 1,
      userId: post.userId,
      title: post.title,
      body: post.body
    };
    this.data.addPost(newPost);
  }

  onSubmit() {
    this.addPost(this.post.value);
    this.post.reset();
  }
}
