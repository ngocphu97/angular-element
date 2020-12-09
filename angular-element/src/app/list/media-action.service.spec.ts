import { TestBed } from '@angular/core/testing';

import { MediaActionService } from './media-action.service';

describe('MediaActionService', () => {
  let service: MediaActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
