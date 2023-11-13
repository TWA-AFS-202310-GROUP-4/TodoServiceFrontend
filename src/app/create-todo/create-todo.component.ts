import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../service/todo.service'
import { TodoHttpService } from '../service/todo-http.service'
import { Output, EventEmitter } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  @Output() created = new EventEmitter();
  subscription : Subscription | undefined
  constructor(
    private formBuilder : FormBuilder,
    private todoHttpService : TodoHttpService,
  ) { }

  todoForm = this.formBuilder.group({
    title : ["", Validators.required],
    description : ["", Validators.required],
  });

  onSubmit() {
    const formValue = this.todoForm.value
    if (formValue.title && formValue.description) {
      const item : ToDoItem = {
        id : 0,
        title : formValue.title,
        description : formValue.description,
        isDone : false
      }
      this.subscription = this.todoHttpService.create(item).subscribe(
        () => 
        {
          this.todoForm.reset();
          this.created.emit();
        }
      );
    }
  }
    
}
