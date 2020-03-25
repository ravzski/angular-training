import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.pug',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input() currentThread
  @Input() currentUser
  @Input() messages

  constructor() { }

  ngOnInit() {
  }

  getMessageClass(message) {
    if (message.user_id == this.currentUser.id) {
      return "my-message"
    } else {
      return "other-message float-right"
    }
  }

}
