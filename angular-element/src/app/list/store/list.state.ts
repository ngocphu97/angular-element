import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { ListPageState } from './substates';

@State({
  name: 'list',
  defaults: {},
  children: [
    ListPageState
  ]
})
@Injectable()
export class ListState { }
