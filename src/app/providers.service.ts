import { Injectable } from '@angular/core';
import { Provider } from './provider';
import { PROVIDERS } from './mock-providers';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  constructor() {}

  getProviders(): Provider[] {
    return PROVIDERS;
  }
}
