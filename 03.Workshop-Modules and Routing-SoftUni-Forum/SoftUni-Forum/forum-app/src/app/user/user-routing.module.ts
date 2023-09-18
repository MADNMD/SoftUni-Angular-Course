import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthActivate],
        data: {
            title: 'Login Page',
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [AuthActivate],
        data: {
            title: 'Register Page',
        },
    },
    {
        path: 'profile',
        component: ProfileComponent,
        // canActivate: [AuthActivate],
        data: {
            title: 'Profile Page',
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { } //това го подаваме в user.module.ts
