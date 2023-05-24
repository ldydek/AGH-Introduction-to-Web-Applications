import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { AddingJourneyComponent } from './components/adding-journey/adding-journey.component';
import { StartingViewComponent } from './components/starting-view/starting-view.component';
import { JourneysComponent } from './components/journeys/journeys.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterComponent } from './components/filter/filter.component';

const routes: Routes = [
  {path: '', component: StartingViewComponent},
  {path: 'journeys', component: JourneysComponent},
  {path: 'cart', component: CartComponent}, 
  {path: 'add-journey', component: AddingJourneyComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
