/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ AppComponent ],
      //schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it ('should have a router-outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  it ('should have a link to the todos page', () => {
    let des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = des.findIndex(de => de.properties['href'] === '/todos');
    expect(index).toBeGreaterThan(-1);
  });
});
