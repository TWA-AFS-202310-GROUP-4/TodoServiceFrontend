import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-detail-component',
  templateUrl: './todo-detail-component.component.html',
  styleUrls: ['./todo-detail-component.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;

  constructor(
    private activatedRouter: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.todoService
      .getItemById(Number(id))
      .subscribe((item) => (this.item = item));
  }
}
