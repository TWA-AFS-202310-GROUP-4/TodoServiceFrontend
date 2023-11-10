import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-creat-todo',
  templateUrl: './creat-todo.component.html',
  styleUrls: ['./creat-todo.component.css'],
})
export class CreatTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private todoservice:TodoService
    
    ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formValue = this.todoForm.value;
    if(formValue.description&& formValue.title)
    {
      this.todoservice.creat(formValue.title,formValue.description)
    }
    this.todoForm.reset()
  }
}
