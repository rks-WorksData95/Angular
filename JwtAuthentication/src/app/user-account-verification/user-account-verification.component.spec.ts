import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountVerificationComponent } from './user-account-verification.component';

describe('UserAccountVerificationComponent', () => {
  let component: UserAccountVerificationComponent;
  let fixture: ComponentFixture<UserAccountVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
