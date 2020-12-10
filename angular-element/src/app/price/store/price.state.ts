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
  pricingList: [
    {
      id: 1,
      title: "free",
      itemPrice: "0",
      detail: [
        "10 users included",
        "2 GB of storage",
        "Email support",
        "Help center access"
      ],
      action: "Sign up for free"
    },
    {
      id: 2,
      title: "pro",
      itemPrice: "15",
      detail: [
        "20 users included",
        "10 GB of storage",
        "Priority email support",
        "Help center access"
      ],
      action: "Get started"
    },
    {
      id: 3,
      title: "enterprise",
      itemPrice: "29",
      detail: [
        "30 users included",
        "15 GB of storage",
        "Phone and email support",
        "Help center access"
      ],
      action: "Contact us"
    }
  ],
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
  ) {  }

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

        console.log(state);

        context.patchState({
          pricingList: state.pricingList,
          isLoading: false
        });


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

        console.log(state);

        context.patchState({
          pricingList: state.pricingList,
          isLoading: false
        });


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