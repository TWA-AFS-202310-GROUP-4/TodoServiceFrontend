import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [
    { id: 1, title: 'buy milk', description: 'like', isDone: false },
    { id: 2, title: 'buy bread', description: 'like', isDone: false },
  ];
  constructor() {}

  getAll() {
    return this.items;
  }

  create(title: string, description: string) {
    this.items.push({
      id: this.items.length + 1,
      title: title,
      description: description,
      isDone: false,
    });
  }
  markDone(currentId:number){
    const currentItem = this.items.find(_item=>_item.id === currentId)
    if(currentItem){
      currentItem.isDone = true
    }
  }

  getItemById(id: number){
    return this.items.find(item => item.id === id)
  }
}
