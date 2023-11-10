import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { TodoService } from '../service/todo.service'
import { TodoHttpService } from '../service/todo-http.service'
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  @Output() created = new EventEmitter();
  constructor(
    private formBuilder : FormBuilder,
    private todoService : TodoService,
    private todoHttpService : TodoHttpService,
  ) { }

  todoForm = this.formBuilder.group({
    title : "",
    description : "",
  });

  onSubmit() {
    const formValue = this.todoForm.value
    if (formValue.title && formValue.description) {
      // this.todoService.create(formValue.title, formValue.description)
      this.todoHttpService.create(formValue.title, formValue.description).subscribe(
        () => 
        {
          this.todoForm.reset();
          this.created.emit();
        }
        );
    }
    // this.todoForm.reset();
  }
    
}
