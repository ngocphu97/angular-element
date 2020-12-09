import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { PriceRoutingModule } from './price-routing.module';
import { PriceListComponent } from './containers/price-list/price-list.component';
import { PriceDetailComponent } from './containers/price-detail/price-detail.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { PriceService } from './services/price.service';
import { PriceElementComponent } from './price-element/price-element.component';
import { ElementService } from './services/element.service';
import { NgxsModule } from '@ngxs/store';
import { PricingState } from './store/price.state';


@NgModule({
  declarations: [
    PriceListComponent,
    PriceDetailComponent,
    CheckoutComponent,
    PriceElementComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    HttpClientModule,
    NgxsModule.forFeature([
      PricingState
    ]),
  ],
  exports: [PriceListComponent, PriceElementComponent],
  providers: [PriceService, ElementService]
})
export class PriceModule { }
