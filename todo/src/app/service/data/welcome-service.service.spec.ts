import { TestBed } from '@angular/core/testing';

import { WelcomeServiceService } from './welcome-service.service';

describe('WelcomeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeServiceService = TestBed.get(WelcomeServiceService);
    expect(service).toBeTruthy();
  });
});
