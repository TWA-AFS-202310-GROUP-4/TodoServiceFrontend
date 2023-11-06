import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodohttpService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<ToDoItem[]>('https://localhost:5001/ToDoItem')
  }

  create(title:string,description:string){
    return this.httpClient.post('https://localhost:5001/ToDoItem',{
      title: title,
      description: description,
      isDone:false
    })
  }
  updateItem(item: ToDoItem){
    return this.httpClient.put<ToDoItem>('https://localhost:5001/ToDoItem',{
      id:item.id,
      title: item.title,
      description: item.description,
      isDone:item.isDone
    },)
  }
  getDetailById(id: number){
    return this.httpClient.get<ToDoItem>(`https://localhost:5001/ToDoItem/${id}`)
  }

  deleById(id:number){
    return this.httpClient.delete<ToDoItem>(`https://localhost:5001/ToDoItem?id=${id}`)
  }
}
