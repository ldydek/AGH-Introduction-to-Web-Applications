import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Post } from "../interfaces/post";
import { Photo } from "../interfaces/photo";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts: Post[] = [];
  photos: Photo[] = [];
  sample: any[] = [];

  constructor(public http: HttpClient) { }

  getPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: Post[]) => this.posts = data);
  }

  getPhotos() {
    this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe((data: Photo[]) => this.photos = data);
  }

  getPhoto(id: number) {
    return this.http.get<Photo>('https://jsonplaceholder.typicode.com/photos/' + id);
  }

  addPost(post: any) {
    this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post)
      .subscribe((data: Post) => this.posts.push(data));
  }
}