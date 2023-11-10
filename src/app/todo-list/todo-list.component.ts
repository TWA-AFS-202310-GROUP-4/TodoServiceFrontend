import { Component } from '@angular/core';
import {ToDoItem } from '../../model/ToDoItem'
import {TodoService } from '../service/todo.service'
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items : ToDoItem[] = []
  constructor(
    private todoService : TodoService,
    private router : Router,
    private todoHttpService : TodoHttpService
  ) { }

  ngOnInit() {
    // this.items = this.todoService.getAll();
    this.todoHttpService.getAll().subscribe(todoitems => this.items = todoitems)
  }

  onMarkDone(id : number) {
    this.todoService.markDone(id);
  }

  onGoToDetails(id : number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
