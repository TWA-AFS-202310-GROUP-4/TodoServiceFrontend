import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  isDoneButtonDisable: boolean = true;

  constructor(
    private todoService: TodoService,
    private router: Router) {}

  ngOnInit() {
    this.items = this.todoService.getAll();
  }

  onDoneClick(item: ToDoItem) {
    this.todoService.markDone(item.id);
    this.isDoneButtonDisable = false;
  }

  onGotoDetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`)
  }
}
