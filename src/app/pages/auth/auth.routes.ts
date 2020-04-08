import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ActiveUserGuard } from '../../services/route-guards/active-user.guard';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
