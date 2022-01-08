import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
})
export class ProvidersComponent implements OnInit {
  provider: Provider = {
    id: 1,
    name: 'audiomachine',
  };
  constructor() {}

  ngOnInit(): void {}
}
