import { TestBed } from '@angular/core/testing';

import { ProxyAdminService } from './proxy-admin.service';

describe('ProxyAdminService', () => {
  let service: ProxyAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxyAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
