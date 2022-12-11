import { Component } from '@angular/core';
import { DataService } from "../../services/data-service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.css']
})
export class SinglePhotoComponent {
  photo: any;
  id?: any;

  constructor(public data: DataService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.data.getPhoto(this.id).subscribe(data => this.photo = data);
  }
}
