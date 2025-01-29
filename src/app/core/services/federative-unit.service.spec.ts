import { TestBed } from '@angular/core/testing';

import { FederativeUnitService } from './federative-unit.service';

describe('FederativeUnitService', () => {
  let service: FederativeUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FederativeUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
