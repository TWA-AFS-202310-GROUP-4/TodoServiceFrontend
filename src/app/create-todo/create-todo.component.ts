import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  @Output() created = new EventEmitter()
  
  constructor(
    private formBuilder: FormBuilder,
    private todoHttpService: TodoHttpService
  ) {}

  toDoForm = this.formBuilder.group({
    title: "",
    description: ""
  })

  onSubmit() {
    const formValues = this.toDoForm.value
    if (formValues.title && formValues.description) {
      this.todoHttpService.create(formValues.title,formValues.description).subscribe(() =>{
        this.toDoForm.reset()
        this.created.emit()
      })
    }
  }
}
