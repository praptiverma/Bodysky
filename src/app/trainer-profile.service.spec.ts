import { TestBed } from '@angular/core/testing';

import { TrainerProfileService } from './trainer-profile.service';

describe('TrainerProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerProfileService = TestBed.get(TrainerProfileService);
    expect(service).toBeTruthy();
  });
});
