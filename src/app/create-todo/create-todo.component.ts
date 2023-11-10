import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  constructor(private formBuilder: FormBuilder) {}

  toDoForm = this.formBuilder.group({
    title: "",
    description: ""
  })

  onSubmit() {
    const formValues = this.toDoForm.value
    console.log(formValues)
  }
}
