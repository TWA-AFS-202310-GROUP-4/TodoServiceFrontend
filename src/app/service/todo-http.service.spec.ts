import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from 'src/model/ToDoItem';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    httpClientSpy.get.and.returnValue(
      asyncData([
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: false,
        },
      ])
    );

    service.getAll().subscribe((data) => {
      expect(data.length).toEqual(1);
    });
  });

  it('should create new item when create new item', () => {
    httpClientSpy.post.and.returnValue(
      asyncData({
        id: 0,
        title: 'Homework',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service
      .createNewItem('Homework', 'Have to complete home work')
      .subscribe((data) => {
        expect(data).toEqual({
          id: 0,
          title: 'Homework',
          description: 'Have to complete home work',
          isDone: false,
        });
      });
  });

  it('should update item isDone to true when updateItemInfo given todolist component markDone', () => {
    httpClientSpy.put.and.returnValue(
      asyncData({
        id: 0,
        title: 'Homework',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service
      .updateItemInfo(0, {
        id: 0,
        title: 'Homework',
        description: 'Have to complete home work',
        isDone: false,
      })
      .subscribe((data) => {
        expect(data).toEqual({
          id: 0,
          title: 'Homework',
          description: 'Have to complete home work',
          isDone: false,
        });
      });
  });

  it('should get correct item when call getItemById', () => {
    httpClientSpy.get.and.returnValue(
      asyncData({
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service.getItemById(0).subscribe((data) => {
      expect(data).toEqual({
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      });
    });
  });
});
