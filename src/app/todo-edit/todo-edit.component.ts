import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodohttpService } from '../service/todohttp.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent {
  item? : ToDoItem
  
  constructor(private httpservice:TodohttpService,
    private router:Router,
    private activateRouter:ActivatedRoute){}

  ngOnInit(){
    const id = this.activateRouter.snapshot.paramMap.get("editId")
    this.httpservice.getDetailById(Number(id)).subscribe(it => this.item = it)
  }


  updateItem(){
    if(this.item)
    this.httpservice.updateItem(this.item).subscribe(()=>{
    this.router.navigateByUrl("")
    })
  }
}
