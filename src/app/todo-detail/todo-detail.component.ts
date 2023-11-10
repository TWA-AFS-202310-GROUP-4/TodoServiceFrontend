import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  
  item: ToDoItem|undefined
  constructor(private activateRoute:ActivatedRoute,private todoservice:TodoService){}

  ngOnInit(){
    const id = this.activateRoute.snapshot.paramMap.get('deatilId')
    this.item = this.todoservice.getDetailById(Number(id))
    console.log(id)
  }

}
