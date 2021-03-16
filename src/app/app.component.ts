import { Component, OnInit } from '@angular/core';
import toDoItem  from '../app/todo-item.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todos: toDoItem[] = [];

  ngOnInit(): void {

  }

  onnewToDo(newtodo: string){
    this.todos.push({
      title: newtodo,
      completed: false
    });

  }
}
