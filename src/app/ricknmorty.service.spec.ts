import { TestBed } from '@angular/core/testing';

import { RicknmortyService } from './ricknmorty.service';

describe('RicknmortyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RicknmortyService = TestBed.get(RicknmortyService);
    expect(service).toBeTruthy();
  });
});
