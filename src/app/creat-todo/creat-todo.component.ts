import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creat-todo',
  templateUrl: './creat-todo.component.html',
  styleUrls: ['./creat-todo.component.css'],
})
export class CreatTodoComponent {
  constructor(private formBuilder: FormBuilder) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formValue = this.todoForm.value;
    console.log(formValue);
  }
}
