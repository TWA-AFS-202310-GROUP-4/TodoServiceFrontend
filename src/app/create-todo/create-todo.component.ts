import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formsValue = this.todoForm.value;
    if (formsValue.title && formsValue.description) {
      this.todoService.createNewItem(formsValue.title, formsValue.description);
      console.log(formsValue);
      this.todoForm.reset();
    }
  }
}
