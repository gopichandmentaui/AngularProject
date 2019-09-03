import { TestBed } from '@angular/core/testing';

import { DataBusService } from './data-bus.service';

describe('DataBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBusService = TestBed.get(DataBusService);
    expect(service).toBeTruthy();
  });
});
