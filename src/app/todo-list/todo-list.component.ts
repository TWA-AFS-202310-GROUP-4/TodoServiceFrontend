import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Route, Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  isDoneButtonDisable: boolean = true;
  itemsSubjector: Subject<ToDoItem[]> | undefined;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    // this.items = this.todoService.getAll();
    // this.todoHttpService.getAll().subscribe((items) => (this.items = items));
    this.itemsSubjector = this.todoService.getSubjector();
    this.todoService.refreshList();
  }

  onDoneClick(item: ToDoItem) {
    this.todoService.markDone(item.id);
    this.isDoneButtonDisable = false;
  }

  onGotoDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }

  onDeleteClick(id: number) {
    this.todoService.removeOne(id);
  }

  onEditClick(id: number) {
    this.router.navigateByUrl(`/edit/${id}`);
  }
}
