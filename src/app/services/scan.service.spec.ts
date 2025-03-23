/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScanService } from './scan.service';

describe('Service: Scan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScanService]
    });
  });

  it('should ...', inject([ScanService], (service: ScanService) => {
    expect(service).toBeTruthy();
  }));
});
