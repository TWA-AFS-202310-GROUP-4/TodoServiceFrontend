import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoList: ToDoItem[] = [
    {
      id: 1,
      title: 'eat',
      description: 'kkkkkkkkkk',
      isDone: false,
    },
    {
      id: 2,
      title: 'buy',
      description: 'kkkkkkkkkk',
      isDone: false,
    },
  ];
}
