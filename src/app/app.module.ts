import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
   UserGuard,
   ActiveUserGuard
} from './services/route-guards/';
import {
   SessionService,
} from './services/api';
import {
   HttpService,
   LocalStorage,
} from './services/utils';

const ROUTE_GUARDS = [
   UserGuard,
   ActiveUserGuard
];

const APP_SERVICES = [
   SessionService,
];

const APP_UTILS = [
   HttpService,
   LocalStorage
];

const APP_MODULES = [
   BrowserModule,
   AppRoutingModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
]


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      ...APP_MODULES
   ],
   providers: [
      ...ROUTE_GUARDS,
      ...APP_SERVICES,
      ...APP_UTILS,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
