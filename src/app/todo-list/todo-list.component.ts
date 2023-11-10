import { Component } from "@angular/core";
import { ToDoItem } from "src/model/ToDoItem";
import { TodoService } from "../service/todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}
  todoList: ToDoItem[] = [];

  ngOnInit() {
    this.todoList = this.todoService.getAll();
  }
}
