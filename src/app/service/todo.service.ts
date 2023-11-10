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

  createNewItem(title: string, description: string) {
    this.todoList.push({
      id: this.todoList.length + 1,
      title: title,
      description: description,
      isDone: false,
    });
  }

  markDone(id: number) {
    const cuuretItem = this.todoList.find((item) => item.id === id);
    if (cuuretItem) {
      cuuretItem.isDone = true;
    }
  }

  getItemById(id: number) {
    return this.todoList.find((item) => item.id === id);
  }
}
