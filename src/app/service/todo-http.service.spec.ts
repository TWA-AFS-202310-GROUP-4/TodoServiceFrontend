import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data))
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete'])
    service = new TodoHttpService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    httpClientSpy.get.and.returnValue(asyncData(
      [
        {
          "id": 0,
          "title": "Home work",
          "description": "Have to complete home work",
          "isDone": false
        }
    ]))

    service.getAll().subscribe(data => {
      expect(data.length).toEqual(1)
    })

    expect(httpClientSpy.get.calls.count()).toEqual(1)
  })

  it('should create an item when call create given an item', () => {
    httpClientSpy.post.and.returnValue(asyncData(
      {
        "id": 0,
        "title": "test",
        "description": "test description",
        "isDone": false
      }
    ))

    service.create("test", "test description").subscribe(data => {
      expect(data.title).toBe("test")
      expect(data.description).toBe("test description")
      expect(data.isDone).toBe(false)
    })

    expect(httpClientSpy.post.calls.count()).toEqual(1)
  })

  it('should find an item when call getItemById given an item', () => {
    httpClientSpy.get.and.returnValue(asyncData(
      {
        "id": 0,
        "title": "target",
        "description": "target description",
        "isDone": false
      }
    ))

    service.getItemById(0).subscribe(data => {
      expect(data.title).toBe("target")
      expect(data.description).toBe("target description")
      expect(data.isDone).toBe(false)
    })

      expect(httpClientSpy.get.calls.count()).toEqual(1)
  })

  it('should delete an item when call deleteItemById given an id', () => {
    httpClientSpy.delete.and.returnValue(asyncData(
      {
        "id": 0,
        "title": "target",
        "description": "target description",
        "isDone": false
      }
    ))

    service.deleteById(0).subscribe(data => {
      expect(data.title).toBe("target")
      expect(data.description).toBe("target description")
      expect(data.isDone).toBe(false)
    })
  })
});
