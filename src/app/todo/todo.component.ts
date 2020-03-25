import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.pug',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos = []
  showTodo = true;

  constructor() { }

  ngOnInit() {
    this.todos.push({
      name: "Draft new Contract",
      date: "01/20/2020",
      img: "/assets/pic.png"
    })

    this.todos.push({
      name: "STUDY  RAILS",
      date: "01/20/2020",
      img: "/assets/pic.png"
    })

  }

  toggleTodo() {
    this.showTodo = !this.showTodo
  }

}
