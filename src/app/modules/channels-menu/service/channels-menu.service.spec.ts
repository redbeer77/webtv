import { TestBed } from '@angular/core/testing';

import { ChannelsMenuService } from './channels-menu.service';

describe('ChannelsMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChannelsMenuService = TestBed.get(ChannelsMenuService);
    expect(service).toBeTruthy();
  });
});
