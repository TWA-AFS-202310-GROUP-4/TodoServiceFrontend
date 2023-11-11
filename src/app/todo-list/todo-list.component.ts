import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(
    private todoHttpService: TodoHttpService,
    private router: Router
  ) {}
  todoList: ToDoItem[] = [];
  ngOnInit() {
    this.refreshTodoList();
  }

  onMarkDone(id: number, item: ToDoItem) {
    item.isDone = true;
    this.todoHttpService.updateItemInfo(id, item).subscribe(() => {
      this.refreshTodoList();
    });
  }

  viewDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }

  refreshTodoList() {
    this.todoHttpService.getAll().subscribe((res) => {
      this.todoList = res;
    });
  }

  deleteItem(id: number) {
    this.todoHttpService.deleteItemById(id).subscribe(() => {
      alert('delete success');
      this.refreshTodoList();
    });
  }
}
