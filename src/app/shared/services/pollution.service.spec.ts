/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PollutionService } from './pollution.service';

describe('Service: Pollution', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollutionService]
    });
  });

  it('should ...', inject([PollutionService], (service: PollutionService) => {
    expect(service).toBeTruthy();
  }));
});
