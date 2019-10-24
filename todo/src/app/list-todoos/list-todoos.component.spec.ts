import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoosComponent } from './list-todoos.component';

describe('ListTodoosComponent', () => {
  let component: ListTodoosComponent;
  let fixture: ComponentFixture<ListTodoosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTodoosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTodoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
