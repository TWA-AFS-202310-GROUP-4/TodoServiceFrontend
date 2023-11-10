import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-service.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('TodoServiceService', () => {
  let service: TodoHttpService;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TestBed.configureTestingModule({});

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    // service = TestBed.inject(TodoHttpService);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    const items = [
      {
        id: 0,
        title: '1',
        description: '1',
        isDone: false,
      },
    ];
    httpClientSpy.get.and.returnValue(asyncData(items));

    service.getAll().subscribe(data => {
      expect(data.length).toEqual(1);
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

});
