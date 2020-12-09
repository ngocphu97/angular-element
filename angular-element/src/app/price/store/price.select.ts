import { Selector } from '@ngxs/store';
import { PriceStateModel, PricingState } from './price.state';

export class PriceSelector extends PricingState {
  
  @Selector() static pricingList(state: PriceStateModel) {
    return state.pricingList;
  }

  @Selector() static isLoading(state: PriceStateModel) {
    return state.isLoading;
  }

  @Selector() static pricingDetail(state: PriceStateModel) {
    return state.pricingDetail;
  }
}
