import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressesComponent } from './addresses/addresses.component';
import { CliamsComponent } from './cliams/cliams.component';
// import { AuthGuard } from 'src/shared/service/Auth-service/auth-guard.service';


@NgModule({
  declarations: [ProfileComponent, PersonalinfoComponent, SidebarComponent, OrdersComponent, AddressesComponent, CliamsComponent,],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,




  ],



})
export class ProfileModule { }
