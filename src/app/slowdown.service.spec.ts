import { TestBed } from '@angular/core/testing';

import { SlowdownService } from './slowdown.service';

describe('SlowdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlowdownService = TestBed.get(SlowdownService);
    expect(service).toBeTruthy();
  });
});
