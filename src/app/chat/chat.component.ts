import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.pug',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

  threadOne = {
    id: 1,
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

  currentUser = {
    name: "Vincent"
  }

  currentThread = this.threadOne

  form

  constructor(
    private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
  }

  addMessage(payload) {
    this.currentThread.messages.push(payload)
  }


  updateThread(thread) {
    this.currentThread = thread
  }

}
