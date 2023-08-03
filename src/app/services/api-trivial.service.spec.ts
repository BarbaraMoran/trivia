import { TestBed } from '@angular/core/testing';

import { ApiTrivialService } from './api-trivial.service';

describe('ApiTrivialService', () => {
  let service: ApiTrivialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTrivialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
