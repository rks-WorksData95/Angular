import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFullFormComponent } from './dynamic-full-form.component';

describe('DynamicFullFormComponent', () => {
  let component: DynamicFullFormComponent;
  let fixture: ComponentFixture<DynamicFullFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFullFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFullFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
