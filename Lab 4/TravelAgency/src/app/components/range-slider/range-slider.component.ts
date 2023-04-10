import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { RangeSliderService } from 'src/app/services/range-slider.service';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnChanges {

  @Input() minValue: number;
  @Input() maxValue: number;

  range: Options;

  constructor(private rangeSliderService: RangeSliderService) { }

  ngOnInit() {
    this.range = {
      floor: this.minValue,
      ceil: this.maxValue
    };
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minValue, this.maxValue);
  }

  ngOnChanges(): void {
    this.range = {
      floor: this.minValue,
      ceil: this.maxValue
    };
  }

  // this function executes each time user will move a slider
  // sending min and max price to be display to range-slider service and later to journeys component
  handleSliderChange() {
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minValue, this.maxValue);  }

  resetFilters() {
    this.minValue = this.range.floor || 0;
    this.maxValue = this.range.ceil || 100;
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minValue, this.maxValue);
  }
}
