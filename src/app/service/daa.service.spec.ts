import { TestBed } from '@angular/core/testing';

import { DaaService } from './daa.service';

describe('DaaService', () => {
  let service: DaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
