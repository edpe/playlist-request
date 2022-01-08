import { Component, OnInit } from '@angular/core';
import { PROVIDERS } from '../mock-providers';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
})
export class ProvidersComponent implements OnInit {
  providers = PROVIDERS;
  constructor() {}

  ngOnInit(): void {}
}
