import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
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
  constructor() {}

  getAll() {
    return this.todoList;
  }
}
