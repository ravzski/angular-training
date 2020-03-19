import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.pug',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input() currentThread
  @Input() currentUser

  constructor() { }

  ngOnInit() {
  }

  getMessageClass(message) {
    if (message.creator == this.currentUser.name) {
      return "my-message"
    } else {
      return "other-message float-right"
    }
  }

}
