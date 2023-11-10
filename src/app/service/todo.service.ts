import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  items: ToDoItem[] = [
    {
      id: 1,
      title: 'sss',
      description: 'sss',
      isDone: false,
    },
    {
      id: 2,
      title: 'sss',
      description: 'sss',
      isDone: false,
    },
  ];
  getAll(){
    return this.items
  }
}
