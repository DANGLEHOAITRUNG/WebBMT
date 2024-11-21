import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ProductDetailsComponent } from './admin/product-details/product-details.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductSearchComponent } from './user/product-search/product-search.component';

const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'}, //Chuyển hướng đến trang product
 { path: 'product', component: ProductComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'edit-product/:id', component: EditProductComponent},
  { path: 'product-search', component: ProductSearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }