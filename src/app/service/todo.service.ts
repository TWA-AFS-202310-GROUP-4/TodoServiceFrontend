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
}
