import { formatCurrency } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  newTodo: string = '';
  @Output() onnewToDo = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onnewToDo.emit(this.newTodo);
    this.newTodo = '';
  }
}
