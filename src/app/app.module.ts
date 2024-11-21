import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './admin/product/product.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ProductSearchComponent } from './user/product-search/product-search.component';

@NgModule({
  declarations:[
    AppComponent,
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductSearchComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
