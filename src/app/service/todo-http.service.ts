import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<ToDoItem[]>('https://localhost:44309/ToDoItem')
  }

  create(title: string, description: string) {
    return this.httpClient.post<ToDoItem>('https://localhost:44309/ToDoItem', 
    {
      title: title,
      description: description,
      isDone:false
    })
  }

  getItemById(id: number) {
    return this.httpClient.get<ToDoItem>('https://localhost:44309/ToDoItem/' + id)
  }

  deleteById(id: number) {
    return this.httpClient.delete<ToDoItem>('https://localhost:44309/ToDoItem/' + id)
  }

  markDone(item: ToDoItem) {
    return this.httpClient.put<ToDoItem>('https://localhost:44309/ToDoItem', 
    {
      id: item.id,
      title: item.title,
      description: item.description,
      isDone: true
    })
  }

  update(item: ToDoItem) {
    return this.httpClient.put<ToDoItem>('https://localhost:44309/ToDoItem', 
    {
      id: item.id,
      title: item.title,
      description: item.description,
      isDone: item.isDone
    })
  }
}
