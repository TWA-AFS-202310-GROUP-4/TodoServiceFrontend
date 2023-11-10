import { Component } from '@angular/core';
import { ToDoItem } from '../../model/ToDoItem'
import { ActivatedRoute } from '@angular/router';
import {TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  item : ToDoItem | undefined;
  constructor(
    private activitedRouter: ActivatedRoute,
    private todoService : TodoService
  ) { }

  NgOninit () {
    const id = this.activitedRouter.snapshot.paramMap.get('detailId');
    this.item = this.todoService.getItemById(Number(id));
  }
}
