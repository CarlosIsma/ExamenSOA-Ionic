import { TestBed } from '@angular/core/testing';

import { ConsumolibreriaService } from './consumolibreria.service';

describe('ConsumolibreriaService', () => {
  let service: ConsumolibreriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumolibreriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
