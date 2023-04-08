import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  OnFilterJourneyNameService = new EventEmitter<string>;
  OnFilterDestinationCountryService = new EventEmitter<string>;

  // sharing data from journeys to filter via service
  OnMinMaxPriceFiltered = new EventEmitter<number[]>;

  filterJourneyName(journeyName: string) {
    this.OnFilterJourneyNameService.emit(journeyName);
  }

  filterDestinationCountry(country: string) {
    this.OnFilterDestinationCountryService.emit(country);
  }

  // from journeys to filter
  getMinMaxPrice(minPrice: number, maxPrice: number) {
    this.OnMinMaxPriceFiltered.emit([minPrice, maxPrice]);
  }
}
