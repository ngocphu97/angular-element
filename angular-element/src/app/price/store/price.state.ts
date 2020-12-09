import { Injectable } from '@angular/core';
import { State, StateContext, Action, StateToken, Store } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { PriceService } from '../services/price.service';
import { Price } from './price.action';

export interface PriceStateModel {
  isLoading: boolean;
  pricingList: Array<any>;
  pricingDetail: any;
}

const defaults: PriceStateModel = {
  isLoading: false,
  pricingList: [],
  pricingDetail: undefined
};

export const PRICING_STATE_TOKEN = new StateToken<PriceStateModel>('pricing');

@State<PriceStateModel>({
  name: PRICING_STATE_TOKEN,
  defaults
})
@Injectable()
export class PricingState {

  constructor(
    private service: PriceService,
    private store: Store
  ) {
    console.log('this.store', this.store);
  }

  @Action(Price.GetPriceList)
  getList(context: StateContext<PriceStateModel>) {

    const state = context.getState();

    context.patchState({
      ...state,
      isLoading: true,
    });

    return this.service.getPricingList().pipe(
      tap(response => {
        if (response) {
          context.patchState({
            ...state,
            isLoading: false,
            pricingList: response,
          });
        }
      }),
      catchError((error) => {

        context.patchState({
          ...state,
          isLoading: false,
        });

        return this.store.dispatch(new Price.GetListFail(error))
      })
    );
  }

  @Action(Price.GetPricingDetail)
  getPriceDetail(context: StateContext<PriceStateModel>, action: Price.GetPricingDetail) {

    const state = context.getState();
    return this.service.getPriceDetail(action.id).pipe(
      tap(response => {
        if (response) {
          context.patchState({
            pricingDetail: response
          });
        }
      }),
      catchError((error) => {
        return this.store.dispatch(new Price.GetListFail(error))
      })
    );
  }

  @Action(Price.UpdateListWithConfig)
  updateListFromConfig(context: StateContext<PriceStateModel>, action: Price.UpdateListWithConfig) {
    context.patchState({
      pricingList: action.list
    });
  }
}