import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent {
  item: ToDoItem | undefined;

  constructor(
    private activatedRouter: ActivatedRoute,
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  todoForm: FormGroup = this.formBuilder.group({});

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.todoService.getItemById(Number(id)).subscribe((item) => {
      this.item = item;
      this.todoForm = this.formBuilder.group({
        title: this.item?.title,
        description: this.item.description,
      });
    });
  }

  onSubmit() {
    const formValue = this.todoForm.value;
    this.todoService.updateTitleDescription(
      this.item!.id,
      formValue.title,
      formValue.description
    );
    this.router.navigateByUrl('');
  }
}
