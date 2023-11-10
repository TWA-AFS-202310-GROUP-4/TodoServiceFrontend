import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        id: 1,
        title: 'buy milk',
        description: 'yummy',
        isDone: false,
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const item = service.getAll();
    expect(item).toEqual([
      { id: 1, title: 'buy milk', description: 'yummy', isDone: false },
    ]);
  });

  it('should create a new item when call create', () => {

    service.create('buy','good');
    expect(service.items).toEqual([
      { id: 1, title: 'buy milk', description: 'yummy', isDone: false },
      { id: 2, title: 'buy', description: 'good', isDone: false },
    ]);
  });

  it('should mark isDone true when call markdone', () => {

    service. markDone(1);
    expect(service.items[0].isDone).toEqual(true);
  });


});
