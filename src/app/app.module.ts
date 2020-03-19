import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ThreadListComponent } from './chat/thread-list/thread-list.component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { MessageFormComponent } from './chat/message-form/message-form.component';

import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ThreadListComponent,
    MessageListComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
