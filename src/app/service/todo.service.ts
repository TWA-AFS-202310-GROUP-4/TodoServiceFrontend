import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
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
  constructor() { }

  getAll(){
    return this.items
  }
}
