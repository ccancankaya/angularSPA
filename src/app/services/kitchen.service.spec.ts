/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KitchenService } from './kitchen.service';

describe('Service: Kitchen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KitchenService]
    });
  });

  it('should ...', inject([KitchenService], (service: KitchenService) => {
    expect(service).toBeTruthy();
  }));
});
