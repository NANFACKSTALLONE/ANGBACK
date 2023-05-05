import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"newProduct",component:ProductsAddComponent},
  {path:"editProduct/:id",component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
