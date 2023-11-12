import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
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
  getAll() {
    return this.items;
  }
  creat(title: string, description: string) {
    this.items.push({
      id: this.items.length + 1,
      title: title,
      description: description,
      isDone: false,
    });
  }

  markdone(id: number) {
    const currentItem = this.items.find((item) => item.id === id);
    if (currentItem) {
      currentItem.isDone = true;
    }
  }
  getDetailById(id:number){
    return this.items.find((item) => item.id === id);
  }
}
