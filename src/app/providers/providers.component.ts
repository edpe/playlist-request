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
  constructor(private providersService: ProvidersService) {}

  getProviders(): void {
    this.providers = this.providersService.getProviders();
  }

  ngOnInit(): void {
    this.getProviders();
  }
}
