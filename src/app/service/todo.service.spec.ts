import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items =[{
      id: 1,
      title: "xianke",
      description: "xianke",
      isDone: false
    }]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getall', () => {
    const items = service.getAll();
    expect(items).toEqual([
      {
        id: 1,
        title: "xianke",
        description: "xianke",
        isDone: false}
    ])
  });
});
