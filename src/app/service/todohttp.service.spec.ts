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
    httpclientSpy = jasmine.createSpyObj('HttpClient',['get']);
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
    "isdone":false

   }]))

   service.getAll().subscribe(data => {
    expect(data.length).toEqual(1)
   })

   expect(httpclientSpy.get.calls.count()).toEqual(1)
  });
});
