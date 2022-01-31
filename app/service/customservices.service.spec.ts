import { TestBed } from '@angular/core/testing';

import { CustomservicesService } from './customservices.service';

describe('CustomservicesService', () => {
  let service: CustomservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
