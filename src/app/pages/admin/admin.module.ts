import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './orders/orders.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { routing } from './admin.routes';
import { UsersComponent } from './users/users.component';

const COMPONENTS = [
  OrdersComponent,
  RestaurantComponent,
  AdminComponent,
  UsersComponent
];

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class AdminModule { }
