import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data-service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.getPhotos();
  }
}
