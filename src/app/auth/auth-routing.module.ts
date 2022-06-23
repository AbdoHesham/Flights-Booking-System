import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginAdminComponent } from './login-admin/login-admin.component';
// import { LoginComponent } from '../components/login/login.component';
// import { RegisterationComponent } from './registeration/registeration.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterationComponent },
  // { path: 'login-admin', component: LoginAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
