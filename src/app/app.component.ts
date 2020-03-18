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
// CRUD
// create,read,update,delete

export class AppComponent {

  title = 'training'
  number1 = 1
  number2 = 2
  currentIndex = -1
  form
  users = []
  errors = []
  currentId = 0

  constructor(
    private fb: FormBuilder,
  ) {
    this.buildForm()
  }

  buildForm() {
    this.form = this.fb.group({
      id: [this.currentIndex],
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
    this.errors = []
    if (this.form.valid && this.isEmailUnique(this.form.controls.email.value, this.form.controls.id.value)) {
      if (!!this.form.controls.id.value && this.form.controls.id.value >= 0) {
        this.users.forEach((user, index) => {
          if (user.id === this.form.controls.id.value) {
            this.users[index] = this.form.value
            return
          }
        })
      } else {
        let newUser = this.form.value
        newUser.id = this.currentId
        this.currentId++
        this.users.push(newUser)
      }
      this.form.reset()
      this.form.controls.id.setValue(this.currentId)
    } else {

    }
  }

  //
  // make it work
  // refactor later
  //
  isEmailUnique(email, id) {
    let flag = true;
    this.users.forEach((user) => {
      if (user.email === email && id != user.id) {
        flag = false;
        this.errors.push("Email is already taken")
        return;
      }
    })
    return flag;
  }

  delete(index) {
    this.users.splice(index, 1)
  }

  update(user, index) {
    this.form.reset()
    this.currentIndex = index
    this.form.controls.id.setValue(user.id)
    this.form.controls.firstName.setValue(user.firstName)
    this.form.controls.lastName.setValue(user.lastName)
    this.form.controls.email.setValue(user.email)
    this.form.controls.password.setValue(user.password)
  }

}
