import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { RangeSliderService } from 'src/app/services/range-slider.service';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent {

  @Input() minPrice: number;
  @Input() maxPrice: number;

  options: Options;

  constructor(private rangeSliderService: RangeSliderService) { }

  ngOnInit() {
    this.options = {
      floor: this.minPrice,
      ceil: this.maxPrice
    };
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minPrice, this.maxPrice);
  }

  // this function executes each time user will move a slider
  // sending min and max price to be display to range-slider service and later to journeys component
  handleSliderChange() {
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minPrice, this.maxPrice);
  }

  resetFilters() {
    this.minPrice = this.options.floor || 0;
    this.maxPrice = this.options.ceil || 100;
    this.rangeSliderService.getMinMaxDisplayedPrice(this.minPrice, this.maxPrice);
  }
}
