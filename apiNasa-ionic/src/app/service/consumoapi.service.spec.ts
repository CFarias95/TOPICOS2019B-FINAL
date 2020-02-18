import { TestBed } from '@angular/core/testing';

import { ConsumoapiService } from './consumoapi.service';

describe('ConsumoapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumoapiService = TestBed.get(ConsumoapiService);
    expect(service).toBeTruthy();
  });
});
