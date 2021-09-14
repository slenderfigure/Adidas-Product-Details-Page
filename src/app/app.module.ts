import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NavbarComponent } from './common/ui-components/navbar/navbar.component';
import { ProductMediaMenuComponent } from './pages/product-details/product-media-menu/product-media-menu.component';
import { ProductVariantMenuComponent } from './pages/product-details/product-variant-menu/product-variant-menu.component';
import { ProductContentComponent } from './pages/product-details/product-content/product-content.component';
import { FooterCompactComponent } from './common/ui-components/footer-compact/footer-compact.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    NavbarComponent,
    ProductMediaMenuComponent,
    ProductVariantMenuComponent,
    ProductContentComponent,
    FooterCompactComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
