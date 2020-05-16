import { TestBed } from '@angular/core/testing';

import { HoroscopeDataService } from './horoscope-data.service';

describe('HoroscopeServiceService', () => {
  let service: HoroscopeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoroscopeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
