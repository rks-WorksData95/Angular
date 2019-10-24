import { TestBed } from '@angular/core/testing';

import { LoginAuthenticationServiceService } from './login-authentication-service.service';

describe('LoginAuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginAuthenticationServiceService = TestBed.get(LoginAuthenticationServiceService);
    expect(service).toBeTruthy();
  });
});
