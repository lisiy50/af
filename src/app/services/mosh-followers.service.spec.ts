import { TestBed, inject } from '@angular/core/testing';

import { MoshFollowersService } from './mosh-followers.service';

describe('MoshFollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoshFollowersService]
    });
  });

  it('should be created', inject([MoshFollowersService], (service: MoshFollowersService) => {
    expect(service).toBeTruthy();
  }));
});
