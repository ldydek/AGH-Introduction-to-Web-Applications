import { Component } from '@angular/core';
import { Car, Model } from '../cars/car';
import carsData from '../cars/cars.json';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  selectedBrand = "";
  selectedModel = "";
  selectedColor = "";

  public models: Array<Model> = [];
  public colors: Array<string> = [];

  cars: Car[] = carsData;

  changeBrand() {
    this.models = this.cars.find((car: Car) => car.brand == this.selectedBrand)!.models;
    this.selectedModel = "";
    this.selectedColor = "";
  }
  changeModel() {
    this.selectedColor = "";
    this.colors = this.models.find((model: Model) => model.name == this.selectedModel)!.colors;
  }

  changeColor(color: string) {
    this.selectedColor = color;
  }
}
