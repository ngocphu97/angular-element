import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PriceModel } from '../../models/price.model';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.scss']
})
export class PriceDetailComponent implements OnInit {


  @Input() priceItem: PriceModel;
  @Input() mainColor: string;
  @Input() secondaryColor: string;

  @Output() selectedPriceItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seeMoreDetail(priceItem) {
    this.selectedPriceItem.emit(priceItem.id);
  }

}
