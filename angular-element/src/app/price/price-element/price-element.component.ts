import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngxs/store';
import { Price } from '../store/price.action';

@Component({
  selector: 'app-price-element',
  templateUrl: './price-element.component.html',
  styleUrls: ['./price-element.component.scss']
})
export class PriceElementComponent implements OnInit {

  @Input()
  get configData() { return this._configData; }
  set configData(configData: any) {
    this._configData = JSON.parse(configData);
    this.store.dispatch(new Price.UpdateListWithConfig(this._configData.pricing));
  }
  private _configData: any;

  constructor(private store: Store) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.configData) {
      console.log("🚀 ~ file: pricing -> onchanges", this.configData)
      this.store.dispatch(new Price.UpdateListWithConfig(this.configData.pricing));
    }
  }

}
