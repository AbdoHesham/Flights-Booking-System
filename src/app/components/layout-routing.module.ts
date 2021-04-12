import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full' },

  { path: 'home', component: HomeComponent },
  { path: 'flight/:id', component: FlightComponent },
  { path: 'search', component: SearchComponent },
  { path: 'book/:id', component: BookingComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'admin', component: AdminComponent },

  { path: 'auth/login', component: LoginComponent },

  {path:'**',component: PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
