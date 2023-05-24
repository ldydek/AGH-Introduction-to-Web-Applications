import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JourneysComponent } from './components/journeys/journeys.component';
import { JourneyComponent } from './components/journey/journey.component';
import { BookedJourneysComponent } from './components/booked-journeys/booked-journeys.component';
import { AddingJourneyComponent } from './components/adding-journey/adding-journey.component';
import { JourneyRatingComponent } from './components/journey-rating/journey-rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { MenuComponent } from './components/menu/menu.component';
import { StartingViewComponent } from './components/starting-view/starting-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneysComponent,
    JourneyComponent,
    BookedJourneysComponent,
    AddingJourneyComponent,
    JourneyRatingComponent,
    CartComponent,
    FilterComponent,
    FilterPipe,
    RangeSliderComponent,
    MenuComponent,
    StartingViewComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSliderModule,
    CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
