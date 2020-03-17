import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})

//
// form, na pag click ung submit button,
// sasabihin niya na firstName is required.
// directive, attribute modified
// test@test.com
// 


// forms
// http
// sessions/security
// Model lifecycle (CRUD)
// create,read,update,delete

export class AppComponent {

  title = 'training'
  number1 = 1
  number2 = 2
  form
  collection = [
    {
      firstName: 'test'
    },
    {
      firstName: 'test2'
    }
  ]

  constructor(
    private fb: FormBuilder,
  ) {
    this.buildForm()
  }

  buildForm() {
    this.form = this.fb.group({
      lastName: ['', [Validators.required, , Validators.minLength(2)]],
      firstName: ['', [Validators.required, , Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  addTwoNumbers() {
    return this.number1 + this.number2
  }

  submitForm() {
    console.log(this.form)
    // HTTP POST to server
  }

  isFormValid() {
    return true;
  }

}
