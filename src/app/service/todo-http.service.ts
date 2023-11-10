import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  todoList: ToDoItem[] = [];
  constructor(private httpClient: HttpClient) {}

  baseurl = 'https://localhost:44309/ToDoItem';
  getAll() {
    return this.httpClient.get<ToDoItem[]>(this.baseurl);
  }
}
