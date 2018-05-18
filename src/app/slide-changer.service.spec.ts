import { TestBed, inject } from '@angular/core/testing';

import { SlideChangerService } from './slide-changer.service';

describe('SlideChangerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideChangerService]
    });
  });

  it('should be created', inject([SlideChangerService], (service: SlideChangerService) => {
    expect(service).toBeTruthy();
  }));
});
