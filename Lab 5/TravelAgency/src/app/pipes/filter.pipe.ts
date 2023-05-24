import { Pipe, PipeTransform } from '@angular/core';
import { Journey } from '../interfaces/journey';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // main function in pipes
  transform(journeys: Journey[], journeyName: string, country: string, minPrice: number, maxPrice: number, startDate: Date, endDate: Date): Journey[] {
    journeys = this.tripName(journeys, journeyName);
    journeys = this.country(journeys, country);
    journeys = this.priceRange(journeys, minPrice, maxPrice);
    journeys = this.dateRange(journeys, startDate, endDate);
    return journeys;
  }

  // filtering via trip name
  tripName(journeys: Journey[], inputName: string) {
    // inputName = inputName.toLowerCase();
    // journeys = journeys.filter(journey => journey.journeyName.toLowerCase().includes(inputName));
    return journeys;
  }

  // filtering via destination country
  country(journeys: Journey[], inputCountry: string) {
    // inputCountry = inputCountry.toLowerCase();
    // journeys = journeys.filter(journey => journey.destinationCountry.toLowerCase().includes(inputCountry));
    return journeys;
  }

  // filtering via price range
  priceRange(journeys: Journey[], minPrice: number, maxPrice: number) {
    return journeys.filter(journey => journey.tourPrice >= minPrice && journey.tourPrice <= maxPrice);
  }

  // filtering via date range
  dateRange(journeys: Journey[], startDate: Date, endDate: Date) {
    return journeys.filter(journey => this.convertToDateType(journey.startDate) >= startDate && this.convertToDateType(journey.endDate) <= endDate);
  }

  // converting from string to Date type
  convertToDateType(dateString: string): Date {
    let newDate: Date = new Date(dateString);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  }
}
