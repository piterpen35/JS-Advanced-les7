import { TestBed } from '@angular/core/testing';

import { ArrServiceService } from './arr-service.service';

describe('ArrServiceService', () => {
  let service: ArrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
