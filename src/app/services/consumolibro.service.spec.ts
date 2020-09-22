import { TestBed } from '@angular/core/testing';

import { ConsumolibroService } from './consumolibro.service';

describe('ConsumolibroService', () => {
  let service: ConsumolibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumolibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
