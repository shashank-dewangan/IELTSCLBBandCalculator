import { TestBed, inject } from '@angular/core/testing';

import { ClbService } from './clb.service';

describe('ClbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClbService]
    });
  });

  it('should be created', inject([ClbService], (service: ClbService) => {
    expect(service).toBeTruthy();
  }));
});
