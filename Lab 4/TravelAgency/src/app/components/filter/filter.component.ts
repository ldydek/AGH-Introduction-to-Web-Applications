import { Component, ViewChild } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { RangeSliderComponent } from '../range-slider/range-slider.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @ViewChild(RangeSliderComponent) rangeSliderComponent: RangeSliderComponent;

  journeyName: string = '';
  country: string = '';
  minPrice: number;
  maxPrice: number;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.OnMinMaxPriceFiltered.subscribe(([minValue, maxValue]) => {
      this.minPrice = minValue;
      this.maxPrice = maxValue;
    })
  }

  filterJourneyName(journeyName: string): void {
    this.filterService.filterJourneyName(journeyName);
  }

  filterDestinationCountry(country: string) {
    this.filterService.filterDestinationCountry(country);
  }

  resetFilters() {
    this.journeyName = '';
    this.country = '';
    this.rangeSliderComponent.resetFilters();
  }
}
