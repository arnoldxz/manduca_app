import { TestBed } from '@angular/core/testing';

import { ProductsProvider } from './products-provider.service';

describe('ProductsProviderService', () => {
  let service: ProductsProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
