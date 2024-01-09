import { TestBed } from '@angular/core/testing';

import { LoggedINService } from './logged-in.service';

describe('LoggedINService', () => {
  let service: LoggedINService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedINService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
