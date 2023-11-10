import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  item: ToDoItem| undefined
  constructor(private activityRouter:ActivatedRoute, private todoService:TodoService){}

  ngOnInit(){
    const id = this.activityRouter.snapshot.paramMap.get('detailId')
    this.item = this.todoService.getItemById(Number(id))
  }
}
