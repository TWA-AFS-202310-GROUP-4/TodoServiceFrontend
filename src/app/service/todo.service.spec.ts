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

  
  it('should make isDone = true when call markdown', () => {

    service.markdone(1);
    expect(service.items).toEqual([
      {
        id: 1,
        title: "xianke",
        description: "xianke",
        isDone: true}
    ])
  });

    it('should add a item when call creat', () => {

    service.creat("xianke2","xianke2")
    expect(service.items).toEqual([
      {
        id: 1,
        title: "xianke",
        description: "xianke",
        isDone: false},
        {
          id: 2,
          title: "xianke2",
          description: "xianke2",
          isDone: false}
    ])
  });
});
