import { Component, OnDestroy, OnInit  } from '@angular/core';
import { ToDoItem } from '../../model/ToDoItem'
import { ActivatedRoute } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  item$: Observable<ToDoItem | undefined> = new Observable<ToDoItem | undefined>();

  constructor(
    private activitedRouter: ActivatedRoute,
    private todoHttpService : TodoHttpService
  ) { }

  NgOninit () {
    const id = this.activitedRouter.snapshot.paramMap.get('detailId');
    this.item$ = this.todoHttpService
      .getById(Number(id)).subscribe();
      // .pipe(takeUntil(this.unsubscribe$));
  }

  onSave(item: ToDoItem) {
    this.todoHttpService.update(item.id, item).subscribe(() => {
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
