import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { AddJourneyComponent } from './components/add-journey/add-journey.component';
import { JourneysComponent } from './components/journeys/journeys.component';
import { StartComponent } from './components/start/start.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HistoryComponent } from './components/history/history.component';
import { JourneyDetailsComponent } from './components/journey-details/journey-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: StartComponent},
  {path: 'journeys', component: JourneysComponent},
  {path: 'journeys/:id', component: JourneyDetailsComponent},
  {path: 'addnewjourney', component: AddJourneyComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'history', component: HistoryComponent},
  {path: '**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
