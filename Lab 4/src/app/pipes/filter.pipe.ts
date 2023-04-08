import { Pipe, PipeTransform } from '@angular/core';
import { Journey } from '../interfaces/journey';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // main function in pipes
  transform(journeys: Journey[], journeyName: string, country: string, minPrice: number, maxPrice: number): Journey[] {
    journeys = this.tripName(journeys, journeyName);
    journeys  = this.country(journeys, country);
    journeys  = this.priceRange(journeys, minPrice, maxPrice);
    return journeys;
  }

  // filtering via trip name
  tripName(journeys: Journey[], inputName: string) {
    inputName = inputName.toLowerCase();
    journeys = journeys.filter(journey => journey.journeyName.toLowerCase().includes(inputName));
    return journeys;
  }

  // filtering via destination country
  country(journeys: Journey[], inputCountry: string) {
    inputCountry = inputCountry.toLowerCase();
    journeys = journeys.filter(journey => journey.destinationCountry.toLowerCase().includes(inputCountry));
    return journeys;
  }

  // filtering via price range
  priceRange(journeys: Journey[], minPrice: number, maxPrice: number) {
    return journeys.filter(journey => journey.tourPrice >= minPrice && journey.tourPrice <= maxPrice);
  }
}
