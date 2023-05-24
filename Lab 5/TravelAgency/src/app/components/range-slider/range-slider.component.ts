import { Component, Input, OnChanges } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { RangeSliderService } from 'src/app/services/range-slider.service';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnChanges {

  // receiving minimum and maximum prices of entire trip list
  // now slider is rendered with dynamic values
  @Input() minValue: number;
  @Input() maxValue: number;

  range: Options;

  constructor(private rangeSliderService: RangeSliderService) { }

  ngOnInit() {
    this.range = {
      floor: this.minValue = 0,
      ceil: this.maxValue = 1000
    };
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minValue, this.maxValue);
  }

  // executes each time "minValue" or "maxValue" will change
  ngOnChanges(): void {
    this.range = {
      floor: this.minValue,
      ceil: this.maxValue
    };
  }

  // this function executes each time user will move a slider
  // sending min and max price to be display to range-slider service and later to journeys component
  handleSliderChange() {
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minValue, this.maxValue);
  }

  // reseting filters after clicking on reset button in filter component
  resetFilters() {
    this.minValue = this.range.floor || 0;
    this.maxValue = this.range.ceil || 100;
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minValue, this.maxValue);
  }
}
