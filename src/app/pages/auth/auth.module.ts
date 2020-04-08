import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './auth.routes';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const COMPONENTS = [
  AuthComponent,
  LoginComponent
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    routing,
  ],
  declarations: [
    ...COMPONENTS
  ]
})

export class AuthModule { }
