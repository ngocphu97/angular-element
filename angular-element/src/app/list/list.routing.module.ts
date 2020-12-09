import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './media/media.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';

const routes: Routes = [
  { path: '', component: MediaListComponent },
  { path: ':id', component: MediaDetailComponent, pathMatch: 'full'},
  { path: 'setup', component: MediaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
