/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

class RouterStub{
  navigate(params){

  }
}

class ActivatedRouteStub{
  private subject  = new Subject(); //this will alow to opush s id in

  push(value){
    this.subject.next(value);
  }
  // params : Observable<any> = Observable.empty();

  get params(){
    return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub}, //replace the real router with a stub.
        { provide: ActivatedRoute, useClass: ActivatedRouteStub}, //replace the real router with a stub.
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should direct the user to the user page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it ('navigate with params - ', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    let route : ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id : 0});

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
