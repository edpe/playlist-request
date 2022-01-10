import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers/providers.component';
import { PlaylistRequestFormComponent } from './playlist-request-form/playlist-request-form.component';

const routes: Routes = [
  { path: '', component: ProvidersComponent },
  {
    path: 'playlist-request-form',
    component: PlaylistRequestFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
