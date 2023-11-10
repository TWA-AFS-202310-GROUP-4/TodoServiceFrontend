import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { ToDoItem } from 'src/model/ToDoItem';

describe('TodoService', () => {
  let service: TodoService;
  const oneItem = {
    id: 0,
    title: '1',
    description: '1',
    isDone: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [oneItem];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const items = service.getAll();

    expect(items).toEqual([oneItem]);
  });

  it('should create a new item when call createOneItem given title and string', () => {
    const item: ToDoItem = {
      id: 1,
      title: '1',
      description: '1',
      isDone: false,
    };

    service.createOneItem(item.title, item.description);

    expect(service.items).toEqual([oneItem, item]);
  });

  it('should mark a item done when call markDone given id', () => {
    service.markDone(0);

    expect(service.items[0].isDone).toBeTrue();
  });
});
