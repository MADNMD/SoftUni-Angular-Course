import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    	path: 'auth',
      loadChildren: () => import('./user/user.module').then(module => module.UserModule),
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
