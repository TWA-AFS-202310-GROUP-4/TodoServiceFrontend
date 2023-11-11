import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: TodoHttpService
  ) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('detailId');
    this.service.getItemById(Number(id)).subscribe((res) => {
      this.item = res;
    });
  }

  updateDetail() {
    if (this.item == null) {
      return;
    }
    this.service
      .updateItemInfo(Number(this.item.id), this.item)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
