import { TestBed } from '@angular/core/testing';

import { ShowsandseriesService } from './showsandseries.service';

describe('ShowsandseriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowsandseriesService = TestBed.get(ShowsandseriesService);
    expect(service).toBeTruthy();
  });
});
