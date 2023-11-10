import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [
    {
      id: 0,
      title: 't1',
      description: 'd1',
      isDone: false,
    },
    {
      id: 1,
      title: 't2',
      description: 'd2',
      isDone: false,
    },
  ];
}
