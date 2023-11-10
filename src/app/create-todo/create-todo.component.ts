import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {TodoService } from '../service/todo.service'

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  constructor(
    private formBuilder : FormBuilder,
    private todoService : TodoService
  ) { }

  todoForm = this.formBuilder.group({
    title : "",
    description : "",
  });

  onSubmit() {
    const formValue = this.todoForm.value
    if (formValue.title && formValue.description) {
      this.todoService.create(formValue.title, formValue.description)
    }
    this.todoForm.reset();
  }
    
}
