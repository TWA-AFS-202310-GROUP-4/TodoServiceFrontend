import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.todoList = [
      {
        id: 1,
        title: 'title1',
        description: 'ssssssss',
        isDone: false,
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when getALl', () => {
    const getTodoList = service.getAll();

    expect(getTodoList).toEqual(service.todoList);
  });

  it('should add todo item to todoList when CreateNew', () => {
    const todoTitle = 'title2';
    const todoDescription = '0000000000000';
    service.createNewItem(todoTitle, todoDescription);

    expect(service.todoList).toEqual([
      {
        id: 1,
        title: 'title1',
        description: 'ssssssss',
        isDone: false,
      },
      {
        id: 2,
        title: 'title2',
        description: '0000000000000',
        isDone: false,
      },
    ]);
  });
  it('should mark item isDone be true when markDone', () => {
    const getTodoList = service.markDone(1);

    expect(service.todoList[0].isDone).toEqual(true);
  });
});
