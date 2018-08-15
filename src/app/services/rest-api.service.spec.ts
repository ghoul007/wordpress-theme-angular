import { TestBed, inject } from '@angular/core/testing';

import { RestAPIService } from './rest-api.service';

describe('RestAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestAPIService]
    });
  });

  it('should be created', inject([RestAPIService], (service: RestAPIService) => {
    expect(service).toBeTruthy();
  }));
});
