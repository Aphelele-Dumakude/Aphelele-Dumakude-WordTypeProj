import { TestBed } from '@angular/core/testing';

import { WordtypeServiceService } from './wordtype-service.service';

describe('WordtypeServiceService', () => {
  let service: WordtypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordtypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
