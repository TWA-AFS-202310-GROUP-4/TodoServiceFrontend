import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-detail-component',
  templateUrl: './todo-detail-component.component.html',
  styleUrls: ['./todo-detail-component.component.css'],
})
export class TodoDetailComponent {
  
  constructor(
    private activatedRouter: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    const item = this.todoService.getItemById(Number(id));
  }
}
