import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressesComponent } from './addresses/addresses.component';
import { CliamsComponent } from './cliams/cliams.component';
import { OrdersComponent } from './orders/orders.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},


  {path: '',component: ProfileComponent,
  // canActivate: [AuthGuard],
  children: [
   {
      path: '',
      component: OrdersComponent
   },
    {
      path: 'personalinfo',
      component: PersonalinfoComponent
   },
    {
      path: 'orders',
      component: OrdersComponent
   },
   {
    path: 'addresses',
    component: AddressesComponent
 },
    {
    path: 'cliams',
    component: CliamsComponent
 },

]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [

],
})
export class ProfileRoutingModule { }
