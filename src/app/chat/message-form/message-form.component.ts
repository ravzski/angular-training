import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.pug',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input() currentUser
  @Output() addMessage = new EventEmitter();
  form;

  constructor(
    private fb: FormBuilder,
  ) {
    this.buildForm()
  }

  buildForm() {
    this.form = this.fb.group({
      message: ['', [Validators.required]]
    })
  }

  submit() {
    let payload = {
      body: this.form.value.message,
      date: '3/18/2020',
      creator: this.currentUser.name
    }
    this.addMessage.emit(payload)
  }

  ngOnInit() {
    debugger
  }

}
