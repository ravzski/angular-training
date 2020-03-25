import { Component, OnInit, ViewEncapsulation, Inject, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.pug',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {


  threadOne = {
    id: 1,
    name: "Rd Porter",
    user: {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
      name: 'Rd Porter',
      status: 'online'
    },
    messages: [
      {
        body: "Hello Ninin",
        date: "3/19/2020",
        creator: "Vincent"
      },
      {
        body: "Hello Vincent",
        date: "3/19/2020",
        creator: "Ninin"
      },
      {
        body: "Hello Vincent Again",
        date: "3/19/2020",
        creator: "Ninin"
      },
      {
        body: "Hello Vincent Again",
        date: "3/19/2020",
        creator: "Ninin"
      }
    ]
  }

  threadTwo = {
    id: 2,
    name: "Ninin Porter",
    user: {
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
      name: 'Ninin Porter',
      status: 'online'
    },
    messages: [
      {
        body: "Hello Ninin",
        date: "3/19/2020",
        creator: "Vincent"
      },
      {
        body: "Hello Rd",
        date: "3/19/2020",
        creator: "Ninin"
      }
    ]
  }

  threads = [this.threadOne, this.threadTwo]

  currentUser


  // currentThread = this.threadOne
  currentThread

  newChatRooms;
  form
  headerAuth
  header
  messages
  baseUrl = "http://localhost:3000"

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    this.headerAuth = {
      'Authorization': 'A5rNjDfuEKN2RcB4VzxXjsP5XdjmNywusUsRJLrcP6Y'
    }
    this.header = new HttpHeaders(this.headerAuth)
    this.getSession()
  }

  getSession() {
    this.httpClient.get(`${this.baseUrl}/api/sessions`, { headers: this.header })
      .subscribe(res => {
        this.currentUser = res
        this.getThreads()
      })
  }

  getThreads() {
    this.httpClient.get(`${this.baseUrl}/api/chat_rooms`, { headers: this.header })
      .subscribe(res => {
        this.newChatRooms = res
        this.currentThread = this.newChatRooms[0]
        this.getMessages()
      })
  }

  getMessages() {
    this.httpClient.get(`${this.baseUrl}/api/chat_rooms/${this.currentThread.id}/messages`, { headers: this.header })
      .subscribe(res => {
        this.messages = res
        this.scrollChat()
      })
  }

  addMessage(payload) {
    // this.currentThread.messages.push(payload)

    this.httpClient.post(`${this.baseUrl}/api/chat_rooms/${this.currentThread.id}/messages`, payload, { headers: this.header })
      .subscribe(res => {
        this.messages.push(res)
        this.scrollChat()
      })

  }

  scrollChat() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        document.querySelector('#chat-list').scrollTop = 99999
      });
    });
  }

  updateThread(thread) {
    this.currentThread = thread
    this.getMessages()
  }

}
