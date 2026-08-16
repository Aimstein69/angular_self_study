import { TestBed } from '@angular/core/testing';

import { Vehicules } from './vehicules';

describe('Vehicules', () => {
  let service: Vehicules;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vehicules);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
