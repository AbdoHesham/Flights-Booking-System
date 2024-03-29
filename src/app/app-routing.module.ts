import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/layout.module').then(m => m.LayoutModule)  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  },

  {path:'**',component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
