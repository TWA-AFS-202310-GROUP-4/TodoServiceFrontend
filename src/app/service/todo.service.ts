import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from './todo-service.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // items: ToDoItem[] = [];
  itemsSubjector: Subject<ToDoItem[]> = new Subject<ToDoItem[]>();
  constructor(private httpService: TodoHttpService) {}

  getSubjector() {
    return this.itemsSubjector;
  }

  refreshList() {
    this.httpService.getAll().subscribe((items) => {
      // this.items = items;
      this.itemsSubjector.next(items);
    });
  }

  createOne(title: string, description: string) {
    this.httpService
      .create({
        title: title,
        description: description,
        isDone: false,
      })
      .subscribe(() => this.refreshList());
  }

  removeOne(id: number) {
    this.httpService.remove(id).subscribe(() => this.refreshList());
  }

  markDone(id: number) {
    // const item = this.items.find((v) => v.id === id);
    this.getItemById(id).subscribe((item) => {
      if (item) {
        item.isDone = true;
        this.httpService.update(item).subscribe(() => this.refreshList());
      }
    });
  }

  updateTitleDescription(id: number, title: string, description: string) {
    this.getItemById(id).subscribe((item) => {
      item.description = description;
      item.title = title;
      this.httpService.update(item).subscribe((_) => this.refreshList());
    });
  }

  getItemById(id: number) {
    return this.httpService.getById(id);
  }
}
