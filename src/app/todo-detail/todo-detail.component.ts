import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodohttpService } from '../service/todohttp.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  
  item: ToDoItem|undefined
  constructor(private activateRoute:ActivatedRoute,private todoservice:TodohttpService){}

  ngOnInit(){
    const id = this.activateRoute.snapshot.paramMap.get('detailId')
    
    this.todoservice.getDetailById(Number(id)).subscribe(it=>
    this.item = it)
  }

}
