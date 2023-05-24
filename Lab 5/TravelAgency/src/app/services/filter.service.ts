import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  // sharing data from journeys to filter via service (determining beginning filter values)
  OnMinMaxPriceFiltered = new EventEmitter<number[]>;
  OnStartEndDateFiltered = new EventEmitter<Date[]>;

  // sharing data from filter to journeys via service (values changed by filters)
  OnFilterJourneyName = new EventEmitter<string>;
  OnFilterDestinationCountry = new EventEmitter<string>;
  OnStartEndDateFiltered2 = new EventEmitter<string[]>;

  filterJourneyName(journeyName: string) {
    this.OnFilterJourneyName.emit(journeyName);
  }

  filterDestinationCountry(country: string) {
    this.OnFilterDestinationCountry.emit(country);
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
    let newDate: Date = new Date(dateString);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }
}
