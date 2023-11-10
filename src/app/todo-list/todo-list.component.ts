import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(private todoService: TodoService, private router: Router) {}
  todoList: ToDoItem[] = [];
  ngOnInit() {
    this.todoList = this.todoService.getAll();
  }

  onMarkDone(id: number) {
    this.todoService.markDone(id);
  }

  viewDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
