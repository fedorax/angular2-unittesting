import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos prop with the items returned', () => {
    let todos = [1,2,3];
    //arrange
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([ todos ])
    });

    //act
    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it ('should call the server to save the changes when a new todo is called', () => {
    let spy = spyOn(service, 'add').and.callFake( (t) => {
      return Observable.empty();
    }); 

    component.add();

    expect(spy).toHaveBeenCalled(); 
  });

  it ('should add the new todo from the server', () => {
    let todo = {id:1};
    // let spy = spyOn(service, 'add').and.callFake( (t) => {
    //   return Observable.from([ todo ]);
    // }); 
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([ todo ])); 

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1); 
  });

  it ('should set the message prop when the server returns error', () => {
    let error = 'error from the server';
    // let spy = spyOn(service, 'add').and.callFake( (t) => {
    //   return Observable.from([ todo ]);
    // }); 
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error)); 

    component.add();

    expect(component.message).toBe(error); 
  });

  it ('should call the server to delete a todo item if the user comfirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it ('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalledWith(1);
  });

});