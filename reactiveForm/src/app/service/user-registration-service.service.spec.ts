import { TestBed } from '@angular/core/testing';

import { UserRegistrationServiceService } from './user-registration-service.service';

describe('UserRegistrationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegistrationServiceService = TestBed.get(UserRegistrationServiceService);
    expect(service).toBeTruthy();
  });
});
