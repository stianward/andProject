import { TestBed } from '@angular/core/testing';

import { TemasInteresService } from './temas-interes.service';

describe('TemasInteresService', () => {
  let service: TemasInteresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemasInteresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
