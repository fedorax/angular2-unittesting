/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService} from './todo.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ], 
      declarations: [ TodosComponent ],
      providers: [TodoService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should load todo from the server - ngInit', () => {
    let todos = [1,2,3];
    let service = TestBed.get(TodoService);//This will get the service if its defines at the module level
    //fixture.debugElement.injector.get(TodoService);//if the service is defined at a component level.
    spyOn(service, 'getTodos').and.returnValue(Observable.from( [ todos ]));
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });
});
