import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProductListComponent } from './common/product-list/product-list.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductPagerComponent } from './common/product-pager/product-pager.component';
import { FooterComponent } from './common/footer/footer.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './page/admin/admin.component';
import { HttpClientModule} from '@angular/common/http';
import { NewProductComponent } from './common/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    FilterPipe,
    ProductListComponent,
    Cat03Component,
    ProductPagerComponent,
    ProductCardComponent,
    FooterComponent,
    SorterPipe,
    DataEditorComponent,
    AdminComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
