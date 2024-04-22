import { TestBed } from '@angular/core/testing';

import { FakegameserverService } from './fakegameserver.service';

describe('FakegameserverService', () => {
  let service: FakegameserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakegameserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
