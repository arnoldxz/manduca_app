import { TestBed } from '@angular/core/testing';

import { ProductsProviderService } from './products-provider.service';

describe('ProductsProviderService', () => {
  let service: ProductsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
