import { Component, OnInit, Input } from '@angular/core';
import  toDoItem  from '../todo-item.model'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor() { }

  @Input() todos: toDoItem[] = []

  ngOnInit(): void {

  }

}
