import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  // sharing data from journeys to filter via service

  constructor() { }

  OnFilterJourneyNameService = new EventEmitter<string>;
  OnFilterDestinationCountryService = new EventEmitter<string>;
  OnMinMaxPriceFiltered = new EventEmitter<number[]>;
  OnStartEndDateFiltered = new EventEmitter<Date[]>;

  // this event emitter goes from filter to journeys via service unlike the others
  OnStartEndDateFiltered2 = new EventEmitter<string[]>;

  filterJourneyName(journeyName: string) {
    this.OnFilterJourneyNameService.emit(journeyName);
  }

  filterDestinationCountry(country: string) {
    this.OnFilterDestinationCountryService.emit(country);
  }

  // minimum and maximum trip prices
  getMinMaxPrice(minPrice: number, maxPrice: number) {
    this.OnMinMaxPriceFiltered.emit([minPrice, maxPrice]);
  }

  // earliest and latest trip dates
  getStartEndDate(startDate: Date, endDate: Date) {
    this.OnStartEndDateFiltered.emit([startDate, endDate]);
  }

  // earliest and latest trip dates chosen thanks to filters
  getStartEndDate2(startDate: string, endDate: string) {
    this.OnStartEndDateFiltered2.emit([startDate, endDate]);
  }

  // converting from string to Date type
  convertToDateType(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(part => parseInt(part));
    return new Date(year, month - 1, day);
    // months are indexed from 0 that's why we substract 1
  }
}
