import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoItemRequest } from 'src/model/ToDoItemRequest';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  baseUrl: string = 'https://localhost:44309/todoitem';

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<ToDoItem[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.httpClient.get<ToDoItem>(`${this.baseUrl}/${id}`);
  }

  create(item: TodoItemRequest) {
    return this.httpClient.post<TodoItemRequest>(this.baseUrl, item);
  }

  remove(id: number) {
    return this.httpClient.delete<ToDoItem>(`${this.baseUrl}?id=${id}`);
  }

  update(item: ToDoItem) {
    return this.httpClient.put<ToDoItem>(this.baseUrl, item);
  }
}
