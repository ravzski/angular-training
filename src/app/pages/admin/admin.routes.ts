import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserGuard } from '../../services/route-guards/user.guard';
import { OrdersComponent } from './orders/orders.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [UserGuard],
    children: [
      { path: '', redirectTo: '/orders', pathMatch: 'full' },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'restoraunt',
        component: RestaurantComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
