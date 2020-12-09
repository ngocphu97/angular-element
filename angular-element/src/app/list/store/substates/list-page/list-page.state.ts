import { Injectable } from '@angular/core';
import { State, StateContext, Action, StateToken, Store } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { MediaActionService } from 'src/app/list/media-action.service';
import { List } from '../../list.actions';

export interface ListPageStateModel {
  isLoading: boolean;
  items: Array<any>;
}

const defaults: ListPageStateModel = {
  isLoading: false,
  items: []
};

export const LOGIN_STATE_TOKEN = new StateToken<ListPageStateModel>('listPage');

@State<ListPageStateModel>({
  name: LOGIN_STATE_TOKEN,
  defaults
})
@Injectable()
export class ListPageState {

  constructor(
    private service: MediaActionService,
    private store: Store
  ) {
    console.log('this.store', this.store);
  }

  @Action(List.GetList)
  getList(context: StateContext<ListPageStateModel>, action: List.GetList) {

    const state = context.getState();

    context.patchState({
      ...state,
      isLoading: true,
    });

    return this.service.getList().pipe(
      tap(response => {
        if (response) {
          context.patchState({
            ...state,
            isLoading: false,
            items: response.items
          });
        }
      }),
      catchError((error) => {

        context.patchState({
          ...state,
          isLoading: false,
        });

        return this.store.dispatch(new List.GetListFail(error))
      })
    );
  }
}