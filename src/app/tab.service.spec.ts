import { TestBed, inject } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabService]
    });
  });

  it('should be created', inject([TabService], (service: TabService) => {
    expect(service).toBeTruthy();
  }));
});
