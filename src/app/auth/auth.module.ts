import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from '../components/login/login.component';
// import { RegisterationComponent } from './registeration/registeration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { LoginAdminComponent } from './login-admin/login-admin.component';

import { environment } from 'src/environments/environment.prod';
// import { AngularFireModule } from 'angularfire2';
// // for AngularFireDatabase
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// // for AngularFireAuth
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    // LoginComponent, LoginAdminComponent, RegisterationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    // AngularFireAuthModule,
    // AngularFireModule,
    // AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(environment.firebase),
  ],
})
export class AuthModule {}
