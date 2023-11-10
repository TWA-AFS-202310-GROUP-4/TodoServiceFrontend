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
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);

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

    service.getAll().subscribe((data) => {
      expect(data.length).toEqual(1);
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should get item when call getById', () => {
    const item = {
      id: 0,
      title: '1',
      description: '1',
      isDone: false,
    };
    httpClientSpy.get.and.returnValue(asyncData(item));

    service.getById(item.id).subscribe((data) => {
      expect(data).toBe(item);
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should create item when call create', () => {
    const item = {
      id: 0,
      title: '1',
      description: '1',
      isDone: false,
    };
    httpClientSpy.post.and.returnValue(asyncData(item));

    service.create(item).subscribe((data) => {
      expect(data).toBe(item);
    });

    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });

  it('should delete item when call delete', () => {
    const item = {
      id: 0,
      title: '1',
      description: '1',
      isDone: false,
    };
    httpClientSpy.delete.and.returnValue(asyncData(item));

    service.remove(item.id).subscribe((data) => {
      expect(data).toBe(item);
    });

    expect(httpClientSpy.delete.calls.count()).toEqual(1);
  });

  it('should update item when call update', () => {
    const item = {
      id: 0,
      title: '1',
      description: '1',
      isDone: false,
    };
    httpClientSpy.put.and.returnValue(asyncData(item));

    service.update(item).subscribe((data) => {
      expect(data).toBe(item);
    });

    expect(httpClientSpy.put.calls.count()).toEqual(1);
  });
});
