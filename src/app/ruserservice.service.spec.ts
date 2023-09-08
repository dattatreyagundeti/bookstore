import { TestBed } from '@angular/core/testing';

import { RuserserviceService } from './ruserservice.service';

describe('RuserserviceService', () => {
  let service: RuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
