import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
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
  constructor() {}

  getAll() {
    return this.items;
  }

  createOneItem(title: string, description: string) {
    this.items.push({
      id: this.items.length,
      title: title,
      description: description,
      isDone: false,
    });
  }

  markDone(id: number) {
    const item = this.items.find((v) => v.id === id);
    if (item) {
      item.isDone = true;
    }
  }
}
