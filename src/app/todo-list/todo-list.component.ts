import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items: ToDoItem [] = []

  constructor(
    private todoService: TodoService,
    private todoHttpService: TodoHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshList()
  }

  refreshList() {
    this.todoHttpService.getAll().subscribe(items => {
      this.items = items
    })
  }

  onMarkDone(item: ToDoItem) {
    this.todoHttpService.markDone(item).subscribe(item => {
      this.refreshList()
    })
  }

  onGoToDetail(id: number) {
    console.log(id)
    this.router.navigateByUrl(`/detail/${id}`)
  }

  onDelete(id: number) {
    this.todoHttpService.deleteById(id).subscribe( _ => {
      this.refreshList()
    })
  }
}
