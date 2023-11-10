import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items: ToDoItem [] = [ {
    id: 1,
    title: 'milk',
    description: "Buy milk",
    isDone: false
  }, 
  {
    id: 2,
    title: 'milk',
    description: "Buy milk",
    isDone: false
  }]
  constructor() { }

  getAll() {
    return this.items
  }

  create(title: string, description: string) {
    this.items.push({
      id: this.items.length + 1,
      title: title,
      description: description,
      isDone: false
    })
  }

  markDone(id: number) {
    const currentItem = this.items.find(item => item.id === id)
    if (currentItem) {
      currentItem.isDone = true
    }
  }

  getItemById(id: number) {
    return this.items.find(item => item.id === id)
  }
}
