import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { ChosenCardComponent } from './components/chosen-card/chosen-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SingleCardComponent,
    ChosenCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
