import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RangeSliderService {

  // sends minimum and maximum price from range-slider component to journeys

  OnMinMaxPriceFiltered = new EventEmitter<number[]>;
  constructor() { }

  getMinMaxDisplayedPrice(minPrice: number, maxPrice: number) {
    this.OnMinMaxPriceFiltered.emit([minPrice, maxPrice]);
  }
}
