import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.pug',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  @Input() threads;
  @Input() currentThread;

  @Output() updateThread = new EventEmitter();

  query = ''

  constructor() { }

  ngOnInit() {
  }

  getThreadClass(thread) {
    if (thread.id == this.currentThread.id) {
      return "active"
    }
  }

  setThread(thread) {
    this.updateThread.emit(thread)
  }

}
