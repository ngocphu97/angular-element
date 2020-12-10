import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PriceModel } from '../../models/price.model';
import { Price } from '../../store/price.action';
import { PriceSelector } from '../../store/price.select';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  priceList: Array<PriceModel>;

  @Select(PriceSelector.isLoading) isLoading$: Observable<boolean>;
  @Select(PriceSelector.pricingList) pricingList$: Observable<any>;
  @Select(PriceSelector.pricingDetail) pricingDetail$: Observable<any>;

  constructor(private store: Store) { 
    this.store.dispatch(new Price.GetPriceList());
  }

  ngOnInit(): void {
    this.store.dispatch(new Price.GetPriceList());
  }

  onSelectedPriceItem(id) {
    this.store.dispatch(new Price.GetPricingDetail(id));
  }

}
