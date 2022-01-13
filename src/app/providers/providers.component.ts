import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../providers.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
})
export class ProvidersComponent implements OnInit {
  providers: Provider[] = [];
  providerTitle = '';
  sortDirection = 'ascending';
  selectedProviders: Provider[] = [];

  constructor(private providersService: ProvidersService) {}

  getProviders(): void {
    this.providers = this.providersService.getProviders();
  }

  onSortDirectionChange(sortDirection: string): void {
    this.sortDirection = sortDirection;
  }

  addOrRemoveProviders(provider: Provider): void {
    if (this.selectedProviders.includes(provider)) {
      this.selectedProviders = this.selectedProviders.filter(
        (p) => p.id !== provider.id
      );
      provider.selected = false;
    } else {
      this.selectedProviders.push(provider);
      provider.selected = true;
    }
  }

  removeSelectedProvider(selectedProvider: Provider): void {
    this.selectedProviders = this.selectedProviders.filter(
      (p) => p.id !== selectedProvider.id
    );
    selectedProvider.selected = false;
  }

  isProviderSelected(): boolean {
    return this.selectedProviders.length > 0;
  }

  ngOnInit(): void {
    this.getProviders();
  }
}
