import { Selector } from '@ngxs/store';
import { ListPageState, ListPageStateModel } from './list-page.state';

export class ListSelector extends ListPageState {
  
  @Selector() static listItems(state: ListPageStateModel) {
    return state.items
  }

  @Selector() static isLoading(state: ListPageStateModel) {
    return state.isLoading
  }
}
