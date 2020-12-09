import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MediaListComponent } from './list/media-list/media-list.component';
import { ListState } from './list/store/list.state';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PriceListComponent } from './price/containers/price-list/price-list.component';
import { PriceElementComponent } from './price/price-element/price-element.component';
import { Router } from '@angular/router';


// set false when build
const local = false;

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    NgxsModule.forRoot([]),
    NgxsFormPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [local ? AppComponent : []]
})
export class AppModule {

  constructor(private injector: Injector, private router: Router) {

    const pricing = createCustomElement(PriceElementComponent, { injector: this.injector })
    customElements.define('micro-pricing', pricing);

    this.router.navigateByUrl('', { skipLocationChange: true });
  }

  ngDoBootstrap(_appRef: ApplicationRef): void { }
}
