import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        id : 1,
        title : 'hh',
        description : 'hh',
        isDone : false
      }
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    service.getAll();
    expect(service.items).toEqual(
      [
      {
        id : 1,
        title : 'hh',
        description : 'hh',
        isDone : false
      }
    ]
    );
  });

  it('should get all items when call create method', () => {
    service.create("hhhhh", "hhhhhhhhhhhhh");
    expect(service.items).toEqual(
      [
        {
          id : 1,
          title : 'hh',
          description : 'hh',
          isDone : false
        },
        {
          id : 2,
          title : "hhhhh",
          description : "hhhhhhhhhhhhh",
          isDone : false
        }
      ]
    );
  });

  it('should mark item done when call markDone method', () => {
    service.markDone(1);
    expect(service.items[0].isDone).toEqual(true);
  });
});
