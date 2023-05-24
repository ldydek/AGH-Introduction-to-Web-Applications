import { Component, ViewChild, Input } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { RangeSliderComponent } from '../range-slider/range-slider.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  // this allows to execute methods of a child component inside parent component
  @ViewChild(RangeSliderComponent) rangeSliderComponent: RangeSliderComponent;

  journeyName: string = '';
  country: string = '';
  minPrice: number;
  maxPrice: number;
  startDate: string;
  endDate: string;

  // these properties help during reseting filters
  resetStartDate: string;
  resetEndDate: string;

  constructor(private filterService: FilterService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.filterService.OnMinMaxPriceFiltered.subscribe(([minValue, maxValue]) => {
      this.minPrice = minValue;
      this.maxPrice = maxValue;
      console.log(this.maxPrice);
    })
    this.filterService.OnStartEndDateFiltered.subscribe(([startDate, endDate]) => {
      this.startDate = this.datePipe.transform(startDate, 'yyyy-MM-dd') || '1970-01-01';
      this.endDate = this.datePipe.transform(endDate, 'yyyy-MM-dd') || '2030-01-01';
      this.resetStartDate = this.startDate;
      this.resetEndDate = this.endDate;
      this.onDatesChange();
    })
  }

  // executes each time user change input date
  onDatesChange(): void {
    this.filterService.getStartEndDate2(this.startDate, this.endDate);
  }

  // sending below properties to filer service and later to journeys
  filterJourneyName(journeyName: string): void {
    this.filterService.filterJourneyName(journeyName);
  }

  filterDestinationCountry(country: string): void {
    this.filterService.filterDestinationCountry(country);
  }

  filterStartEndDate(): void {
    this.filterService.getStartEndDate2(this.startDate, this.endDate);
  }

  resetFilters(): void {
    this.journeyName = '';
    this.country = '';
    this.rangeSliderComponent.resetFilters();
    this.startDate = this.resetStartDate;
    this.endDate = this.resetEndDate;
    this.filterService.getStartEndDate2(this.startDate, this.endDate);
  }
}
