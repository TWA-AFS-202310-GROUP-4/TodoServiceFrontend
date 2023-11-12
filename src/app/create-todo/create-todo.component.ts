import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private todoHttpService: TodoHttpService
  ) {}

  @Output() created = new EventEmitter();
  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formsValue = this.todoForm.value;
    if (formsValue.title && formsValue.description) {
      this.todoHttpService
        .createNewItem(formsValue.title, formsValue.description)
        .subscribe(() => {
          this.todoForm.reset();
          this.created.emit();
        });
    }
  }
}
