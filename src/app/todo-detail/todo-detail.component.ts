import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { FormBuilder } from '@angular/forms';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;
  constructor(
    private activityRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private todoHttpService: TodoHttpService
  ) {}
  todoForm: any;

  ngOnInit() {
    const id = this.activityRouter.snapshot.paramMap.get('detailId');
    this.todoHttpService.getItemById(Number(id)).subscribe((itemReturned) => {
      this.item = itemReturned;
      this.todoForm = this.formBuilder.group({
        title: this.item?.title,
        description: this.item?.description,
      });
    });
  }
  onSubmit() {
    const formValues = this.todoForm.value;
    if (formValues.title && formValues.description && this.item) {
      this.item.description = formValues.description;
      this.item.title = formValues.title;
      this.todoHttpService
        .put(this.item.id, this.item)
        .subscribe((itemUpdated) => {
          this.item = itemUpdated;
        });
    }
  }
}
