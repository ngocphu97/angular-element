import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list.routing.module';

import { NgxsModule } from '@ngxs/store';

import { ListState } from './store/list.state';

import { MediaComponent } from './media/media.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaActionComponent } from './media-action/media-action.component';

import { ListPageState } from './store/substates';
import { MediaActionService } from './media-action.service';
import { MediaDetailComponent } from './media-detail/media-detail.component';


@NgModule({
  declarations: [
    MediaListComponent,
    MediaActionComponent,
    MediaComponent,
    MediaDetailComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    NgxsModule.forRoot([
      ListState, ListPageState
    ]),
  ],
  exports: [
    MediaListComponent
  ],
  providers: [MediaActionService]
})
export class ListModule { }
