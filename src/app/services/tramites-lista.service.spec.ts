import { TestBed } from '@angular/core/testing';

import { TramitesListaService } from './tramites-lista.service';

describe('TramitesListaService', () => {
  let service: TramitesListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TramitesListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
