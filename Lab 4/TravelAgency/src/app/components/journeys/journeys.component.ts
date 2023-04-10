import { Component } from '@angular/core';
import journeysData from '../../data/journeys.json';
import { Journey } from 'src/app/interfaces/journey';
import { AddJourneyService } from 'src/app/services/add-journey.service';
import { FilterService } from 'src/app/services/filter.service';
import { RangeSliderService } from 'src/app/services/range-slider.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent {

  journeys: Journey[] = journeysData;
  minPrice = Infinity;
  maxPrice = -Infinity;

  // filters properties below
  journeyName: string;
  country: string;
  displayedMinPrice: number = Infinity;
  displayedMaxPrice: number = -Infinity;
  displayedStartDate: Date = this.findStartDate();
  displayedEndDate: Date = this.findEndDate();

  constructor(private addJourneyService: AddJourneyService, private filterService: FilterService, private rangeSliderService: RangeSliderService) { }

  ngOnInit(): void {
    this.findMinMaxPrice();
    // here we start to listen for new journey added from the form to tour list
    // start to listen, not immediately add!
    this.addJourney();
    this.filterJourneyName();
    this.filterCountry();
    this.getMinMaxPrice();
    this.getStartEndDate();
    this.displayPriceFromSlider();
    this.receiveStartEndDate();
  }

  // finds tours with min and max prices from i given tour list
  findMinMaxPrice(): void {
    this.journeys.sort((a, b) => a.tourPrice - b.tourPrice);
    this.minPrice = this.journeys[0].tourPrice;
    this.maxPrice = this.journeys[this.journeys.length - 1].tourPrice;
    this.displayedMinPrice = this.minPrice;
    this.displayedMaxPrice = this.maxPrice;
  }

  // finding earliest starting date
  findStartDate(): Date {
    let earliestDate: Date = new Date(this.journeys[0].startDate);
    for (const journey of this.journeys) {
      if (new Date(journey.startDate) < earliestDate) {
        earliestDate = new Date(journey.startDate);
      }
    }
    earliestDate.setHours(0, 0, 0, 0);
    return earliestDate;
  }

  // finding latest ending date
  findEndDate(): Date {
    let latestDate: Date = new Date(this.journeys[0].endDate);
    for (const journey of this.journeys) {
      if (new Date(journey.endDate) > latestDate) {
        latestDate = new Date(journey.endDate);
      }
    }
    latestDate.setHours(0, 0, 0, 0);
    return latestDate;
  }

  // adds new journey to the trip list from a form (addingJourney component)
  addJourney(): void {
    this.addJourneyService.OnAddJourneyClicked.subscribe((journey: Journey) => {
      this.journeys.push(journey);
      this.findMinMaxPrice();
      this.getMinMaxPrice();
      this.findStartDate();
      this.findEndDate();
      this.getStartEndDate();
    })
  }

  // removes a trip from a trip list
  removeJourney(journeyToRemove: Journey): void {
    this.journeys = this.journeys.filter(j => j != journeyToRemove)
    this.findMinMaxPrice();
    this.getMinMaxPrice();
    this.findStartDate();
    this.findEndDate();
    this.getStartEndDate();
  }

  // filter methods below
  filterJourneyName() {
    this.filterService.OnFilterJourneyNameService.subscribe((journeyName) => {
      this.journeyName = journeyName;
    })
  }

  filterCountry() {
    this.filterService.OnFilterDestinationCountryService.subscribe((country) => {
      this.country = country;
    })
  }

  // sending current minimum and maximum price to the filter component via service
  // (some filter could be used already)
  getMinMaxPrice() {
    return this.filterService.getMinMaxPrice(this.minPrice, this.maxPrice);
  }

  // sending earliest and latest trip date to the filter component via service
  getStartEndDate() {
    return this.filterService.getStartEndDate(this.findStartDate(), this.findEndDate());
  }

  // receiving earliest and latest trip dates from a filter component via service
  receiveStartEndDate() {
    this.filterService.OnStartEndDateFiltered2.subscribe(([startDate, endDate]) => {
      this.displayedStartDate = this.filterService.convertToDateType(startDate);
      this.displayedEndDate = this.filterService.convertToDateType(endDate);
    })
  }

  // receiving min and max price to be displayed from range-slider component
  displayPriceFromSlider() {
    this.rangeSliderService.OnMinMaxPriceFiltered.subscribe(([minPrice, maxPrice]) => {
      this.displayedMinPrice = minPrice;
      this.displayedMaxPrice = maxPrice;
    })
  }
}
