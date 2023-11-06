import { TestBed } from '@angular/core/testing';

import { TodohttpService } from './todohttp.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T){
return defer(() => Promise.resolve(data))
}
describe('TodohttpService', () => {
  let service: TodohttpService;
  let httpclientSpy : jasmine.SpyObj<HttpClient>
  beforeEach(() => {
    httpclientSpy = jasmine.createSpyObj('HttpClient',['get','delete','post','put']);
    service = new TodohttpService(httpclientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get items when call getall', () => {
   httpclientSpy.get.and.returnValue(asyncData([{
    "id":1,
    "title":"hh",
    "description":"ss",
    "isDone":false

   }]))

   service.getAll().subscribe(data => {
    expect(data.length).toEqual(1)
   })

   expect(httpclientSpy.get.calls.count()).toEqual(1)
  });
  it('should get item when call getDetailById', () => {
    httpclientSpy.get.and.returnValue(asyncData({
     "id":1,
     "title":"hh",
     "description":"ss",
     "isDone":false
 
    }))
 
    service.getDetailById(1).subscribe(data => {
     expect(data.id).toEqual(1)
    })
 
    expect(httpclientSpy.get.calls.count()).toEqual(1)
   });
 
   it('should delete item when call deletById', () => {
    httpclientSpy.delete.and.returnValue(asyncData({
     "id":1,
     "title":"hh",
     "description":"ss",
     "isDone":false
 
    }))
 
    service.deletById(1).subscribe(data => {
     expect(data.id).toEqual(1)
    })
 
    expect(httpclientSpy.delete.calls.count()).toEqual(1)
   });
   it('should create an item and return it when calling create', () => { 
    const expectedItem = {
      id: 0,
      title: "hh",
      description: "ss",
      isDone: false
    };
  
    httpclientSpy.post.and.returnValue(asyncData(expectedItem));
  
    service.create("hh","ss").subscribe(data => {
      expect(data).toEqual(expectedItem); 
    });
    expect(httpclientSpy.post.calls.count()).toEqual(1);
  
  });
  it('should update an item and return it when calling update', () => { 
    const expectedItem = {
      id: 0,
      title: "hh",
      description: "ss",
      isDone: false
    };
  
    httpclientSpy.put.and.returnValue(asyncData(expectedItem));
  
    service.updateItem(expectedItem).subscribe(data => {
      expect(data).toEqual(expectedItem); 
    });
    expect(httpclientSpy.put.calls.count()).toEqual(1);
  
  });
  


});
