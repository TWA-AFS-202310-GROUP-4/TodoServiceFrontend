import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let itemForTestReturned: ToDoItem;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);
    service = new TodoHttpService(httpClientSpy);
    itemForTestReturned = {
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work',
      isDone: false,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll()', () => {
    httpClientSpy.get.and.returnValue(asyncData([itemForTestReturned]));
    service.getAll().subscribe((data) => {
      expect(data.length).toEqual(1);
      expect(httpClientSpy.get.calls.count()).toEqual(1);
    });
  });

  it('should return a created todo item when call create()', () => {
    httpClientSpy.post.and.returnValue(asyncData([itemForTestReturned]));
    service
      .create('Home work', 'Have to complete home work')
      .subscribe((data) => {
        expect(data).toEqual([itemForTestReturned]);
        expect(httpClientSpy.post.calls.count()).toEqual(1);
      });
  });

  it('should delete a todo item when calling deleteTodo()', () => {
    const todoIdToDelete = 0;

    httpClientSpy.delete.and.returnValue(asyncData({}));

    service.delete(todoIdToDelete).subscribe(() => {
      expect(httpClientSpy.delete.calls.count()).toEqual(1);
      expect(httpClientSpy.delete.calls.first().args[0]).toBe(
        `https://localhost:44309/ToDoItem/${todoIdToDelete}`
      );
    });
  });
  it('should update description and title when calling put()', () => {
    const todoIdToUpdate = 0;

    httpClientSpy.put.and.returnValue(asyncData(itemForTestReturned));
    const itemBeforeUpdate: ToDoItem = {
      id: 0,
      title: 'hello',
      description: 'world',
      isDone: false,
    };

    service.put(todoIdToUpdate, itemBeforeUpdate).subscribe((data) => {
      expect(httpClientSpy.put.calls.count()).toEqual(1);
      expect(httpClientSpy.put.calls.first().args[0]).toBe(
        `https://localhost:44309/ToDoItem/${todoIdToUpdate}`
      );
      expect(data).toBe(itemForTestReturned);
    });
  });

  it('should return correct item with id when calling getItemById()', () => {
    const todoIdToRequest = 0;

    httpClientSpy.get.and.returnValue(asyncData(itemForTestReturned));

    service.getItemById(todoIdToRequest).subscribe((data) => {
      expect(httpClientSpy.get.calls.count()).toEqual(1);
      expect(httpClientSpy.get.calls.first().args[0]).toBe(
        `https://localhost:44309/ToDoItem/${todoIdToRequest}`
      );
      expect(data).toBe(itemForTestReturned);
    });
  });
});
