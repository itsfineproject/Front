import { TestBed } from '@angular/core/testing';

import { CarCarService } from './car-car.service';

describe('CarCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarCarService = TestBed.get(CarCarService);
    expect(service).toBeTruthy();
  });
});
