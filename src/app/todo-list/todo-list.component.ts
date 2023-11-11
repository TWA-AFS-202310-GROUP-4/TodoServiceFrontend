import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = []

  constructor(
    private todoHttpService:TodoHttpService,
    private router:Router
  ){}

  ngOnInit(){
    this.refreshList()
  }

  refreshList(){
    this.todoHttpService.getAll().subscribe(todoItems =>{
      this.items = todoItems
    })
  }

  onMarkDone(id:number){
    const itemindex = this.items.findIndex(itemUpdate => itemUpdate.id === id)
    if(itemindex >= 0){
      this.todoHttpService.put(id,this.items[itemindex]).subscribe(data=>{
        this.items[itemindex] = data
      })
    }
  }

  onGoToDetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`)
  }
  onRemove(id: number){
    this.todoHttpService.delete(id).subscribe(()=>{
      this.refreshList()
    })

  }
}
