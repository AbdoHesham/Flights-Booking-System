import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminAuthGuard } from './guard/admin-auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full' },

  { path: 'home', component: HomeComponent },
  { path: 'flight/:id', component: FlightComponent },
  { path: 'search', component: SearchComponent },
  { path: 'book/:id', component: BookingComponent ,canActivate :[AuthGuard]},
  { path: 'ticket', component: TicketComponent ,canActivate :[AuthGuard]},
  { path: 'admin', component: AdminComponent ,canActivate :[AdminAuthGuard]  },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterationComponent },
  { path: 'auth/login-admin', component: LoginAdminComponent },

  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) ,canActivate :[AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
