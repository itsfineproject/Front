import { TestBed } from '@angular/core/testing';

import { CarFineService } from './car-fine.service';

describe('CarFineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarFineService = TestBed.get(CarFineService);
    expect(service).toBeTruthy();
  });
});
