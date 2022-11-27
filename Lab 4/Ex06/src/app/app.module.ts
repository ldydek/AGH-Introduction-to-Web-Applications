import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './components/topic/topic.component';
import { TopicscardComponent } from './components/topicscard/topicscard.component';
import { ChosenCardComponent } from './components/chosen-card/chosen-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    TopicscardComponent,
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
