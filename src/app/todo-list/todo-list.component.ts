import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = []
  
  constructor(private todoservice: TodoService){}
  
  ngOnInit(){
    this.items = this.todoservice.getAll()
  }
  markdown(id:number){
    this.todoservice.markdown(id)
  }
}
