import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RangeSliderService {

  OnMinMaxPriceFiltered = new EventEmitter<number[]>;
  constructor() { }

  // sends minimum and maximum price from range-slider component to journeys via service
  getMinMaxDisplayedPrice(minPrice: number, maxPrice: number) {
    this.OnMinMaxPriceFiltered.emit([minPrice, maxPrice]);
  }
}
