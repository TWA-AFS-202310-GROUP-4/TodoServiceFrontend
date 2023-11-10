import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { TodoHttpService } from './todo-service.service';
import { asyncData } from './todo-service.service.spec';

describe('TodoService', () => {
  let service: TodoService;
  let httpClientSpy: jasmine.SpyObj<TodoHttpService>;
  const oneItem = {
    id: 0,
    title: '1',
    description: '1',
    isDone: false,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});

    httpClientSpy = jasmine.createSpyObj('TodoHttpService', [
      'getAll',
      'create',
      'remove',
      'update',
      'getById',
    ]);
    service = new TodoService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send items when call refreshList', () => {
    httpClientSpy.getAll.and.returnValue(asyncData([oneItem]));

    service.refreshList();
    service.itemsSubjector.subscribe((items) =>
      expect(items.length).toEqual(1)
    );
  });

  it('should create item when call createOne', () => {
    httpClientSpy.create.and.returnValue(asyncData(oneItem));
    httpClientSpy.getAll.and.returnValue(asyncData([oneItem]));

    service.createOne(oneItem.title, oneItem.description);

    expect(httpClientSpy.create.calls.count()).toEqual(1);
  });

  it('should delete item when call removeOne', () => {
    httpClientSpy.create.and.returnValue(asyncData(oneItem));
    httpClientSpy.getAll.and.returnValue(asyncData([oneItem]));
    httpClientSpy.remove.and.returnValue(asyncData(oneItem));

    service.removeOne(oneItem.id);

    expect(httpClientSpy.remove.calls.count()).toEqual(1);
  });

  it('should mark done when call markDone', () => {
    httpClientSpy.create.and.returnValue(asyncData(oneItem));
    httpClientSpy.getAll.and.returnValue(asyncData([oneItem]));
    httpClientSpy.remove.and.returnValue(asyncData(oneItem));
    httpClientSpy.getById.and.returnValue(asyncData(oneItem));
    httpClientSpy.update.and.returnValue(asyncData(oneItem));

    service.markDone(oneItem.id);

    expect(httpClientSpy.getById.calls.count()).toEqual(1);
  });

  it('should update content when call updateTitleDescription', () => {
    httpClientSpy.getById.and.returnValue(asyncData(oneItem));
    httpClientSpy.getAll.and.returnValue(asyncData([oneItem]));
    httpClientSpy.update.and.returnValue(asyncData(oneItem));

    service.updateTitleDescription(
      oneItem.id,
      oneItem.title,
      oneItem.description
    );

    expect(httpClientSpy.getById.calls.count()).toEqual(1);
  });

  it('should get item when call getItemById', () => {
    httpClientSpy.getById.and.returnValue(asyncData(oneItem));

    service.getItemById(oneItem.id);

    expect(httpClientSpy.getById.calls.count()).toEqual(1);
  });
});
