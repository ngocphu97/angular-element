import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./price/price.module').then(m => m.PriceModule)
  //     },
  //     // {
  //     //   path: 'list',
  //     //   loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  //     // }
  //   ]
  // },
  { path: '', redirectTo: 'price', pathMatch: 'full' },
  {
    path: 'price',
    loadChildren: () => import('./price/price.module').then(m => m.PriceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
