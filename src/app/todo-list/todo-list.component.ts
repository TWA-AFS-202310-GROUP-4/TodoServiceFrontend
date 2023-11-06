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

  constructor(private router: Router,
    private todohttpService: TodohttpService) { }

  ngOnInit() {
    this.refresh()
  }
  markdone(item: ToDoItem) {
    this.todohttpService.updateItem(item).subscribe(
      () => {this.refresh()}
      )
  }

  gotodetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`)
  }
  gotoedit(id:number){
   this.router.navigateByUrl(`/edit/${id}`)
  }

  refresh() {
    this.todohttpService.getAll().subscribe(todoItems => {
      this.items = todoItems
    })
  }
  deleteById(id:number){
    this.todohttpService.deletById(id).subscribe(()=>{
      this.refresh()
    })
  }
  
}
