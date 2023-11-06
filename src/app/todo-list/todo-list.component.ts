import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Route, Router } from '@angular/router';
import { TodohttpService } from '../service/todohttp.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = []
  
  constructor(private todoservice: TodoService, private router: Router,
    private todohttpService: TodohttpService){}
  
  ngOnInit(){
  this.refresh()
  }
  markdone(item:ToDoItem){
    this.todohttpService.markdone(item).subscribe(item2 =>{
      let  founditem = this.items.find(it => it.id === item2.id)
      if(founditem)
      founditem.isDone = item2.isDone
    })
  }

  gotodetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`)
  }

  refresh(){
    this.todohttpService.getAll().subscribe(todoItems =>{
      this.items = todoItems})
  }
}
