import { Component , EventEmitter, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { TodohttpService } from '../service/todohttp.service';

@Component({
  selector: 'app-creat-todo',
  templateUrl: './creat-todo.component.html',
  styleUrls: ['./creat-todo.component.css'],
})
export class CreatTodoComponent {
  
  @Output() created = new EventEmitter()
  constructor(
    private formBuilder: FormBuilder,
    private todoservice:TodoService,
    private todohttpservice:TodohttpService
    
    ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formValue = this.todoForm.value;
    if(formValue.description&& formValue.title)
    {
      this.todohttpservice.create(formValue.title,formValue.description)
      .subscribe(() => {
        this.created.emit()
        this.todoForm.reset() 
      })
    }
  }
}
