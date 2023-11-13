import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from '../../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {
  private url: string;
  constructor(
    private httpClient : HttpClient
  ) {
    this.url = 'https://localhost:44309/ToDoItem';
  }

  getAll() {
    return this.httpClient.get<ToDoItem[]>(this.url);
  }

  create(item : ToDoItem) {
    return this.httpClient.post(this.url, item);
  }

  getById(id : number){
    return this.httpClient.get<ToDoItem>(`${this.url}/${id}`)
  }

  delete(id : number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  update(id : number, item : ToDoItem) {
    return this.httpClient.put(`${this.url}/${id}`, item);
  }
}
