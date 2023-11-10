import { Component } from '@angular/core';
import {ToDoItem } from '../../model/ToDoItem'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items : ToDoItem[] = [
    {
      id : 1,
      title : 'buy milk',
      description : 'hh',
      isDone : false,
    },
    {
      id : 1,
      title : 'buy milk',
      description : 'hh',
      isDone : false,
    }
  ]
}
