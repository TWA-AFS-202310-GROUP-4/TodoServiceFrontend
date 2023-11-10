import { Injectable } from '@angular/core';
import {ToDoItem } from '../../model/ToDoItem'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items : ToDoItem[] = [
    {
      id : 1,
      title : 'buy milk',
      description : 'hh',
      isDone : false,
    },
    {
      id : 2,
      title : 'buy milk',
      description : 'hh',
      isDone : false,
    }
  ]
  constructor() { }

  getAll() {
    return this.items
  }

  create(title: string, description: string) {
    this.items.push({
      id : this.items.length + 1,
      title : title,
      description : description,
      isDone : false,
    });
  }

  markDone(id: number) {
    const item = this.items.find(_item => _item.id === id);
    if (item) {
      item.isDone = true;
    }
  }

  getItemById(id: number) {
    return this.items.find(_item => _item.id === id);
  }
}
