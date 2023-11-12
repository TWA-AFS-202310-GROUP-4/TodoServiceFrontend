import { Component, OnDestroy } from '@angular/core';
import { ToDoItem } from '../../model/ToDoItem';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items : ToDoItem[] = []
  private subscriptions: Subscription[] = [];
  constructor(
    private router : Router,
    private todoHttpService : TodoHttpService
  ) {
    this.onRefreshList();
  }

  ngOnInit() {
    this.onRefreshList();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onRefreshList() {
    const sub = this.todoHttpService.getAll().subscribe((todoitems) => (this.items = todoitems))
    this.subscriptions.push(sub)
  }

  onMarkDone(id : number) {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.isDone = true;
      const sub = this.todoHttpService.update(id, item).subscribe(() => this.onRefreshList());
      this.subscriptions.push(sub);
    }
  }

  onDelete(id: number) {
    const sub = this.todoHttpService.delete(id).subscribe(() => this.onRefreshList());
    this.subscriptions.push(sub);
  }

  trackItem(index: number, item: ToDoItem) {
    return item.id;
  }

  onGoToDetails(id : number) {
    this.router.navigate(['/detail', id]);
  }
}
