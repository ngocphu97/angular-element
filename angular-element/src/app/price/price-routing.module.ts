import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceListComponent } from './containers/price-list/price-list.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { PriceElementComponent } from './price-element/price-element.component';

const routes: Routes = [
  {
    path: '', 
    component: PriceElementComponent,
    outlet: 'price',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  { path: 'list', component: PriceListComponent, outlet: "price" },
  { path: 'checkout', component: CheckoutComponent, outlet: "price" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceRoutingModule { }
