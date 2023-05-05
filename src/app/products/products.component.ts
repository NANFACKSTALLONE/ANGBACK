import { Component, OnInit } from '@angular/core';
//import { DataState } from './data-state.enum';

import { ProductsService } from '../services/products.service';
import { Product } from '../model/product.model';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from '../state/products.state';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products$: Observable<AppDataState<Product[]>> |null=null;
  readonly DataStateEnum= DataStateEnum;



  constructor(private productService:ProductsService, private router:Router){}
  ngOnInit(): void {

  }
  getAllProduct(){
    console.log("start...");
    this.products$=
    this.productService.getAllProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADER,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR ,errorMessage:err.message}))
    );


  }
  getSeletedProduct(){
    console.log("start...");
    this.products$=
    this.productService.getSelectedProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADER,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR ,errorMessage:err.message}))
    );
  }
  getAvailableProduct(){
    console.log("start...");
    this.products$=
    this.productService.getAvailableProducts().pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADER,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR ,errorMessage:err.message}))
    );

  }
  onSearch(dataForms:any){

    console.log("start...");
    this.products$=
    this.productService.onSearchSt(dataForms.keyword).pipe(
      map(data=>{
        console.log(data);
        return ({dataState:DataStateEnum.LOADER,data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR ,errorMessage:err.message}))
    );

  }
  onSelect(p:Product){
this.productService.onSelect12(p).subscribe(
  data=>{
    p.selected=data.selected;
  })
  }
  onDelete(p:Product){
    let s=confirm("voulez vous vraiment supprimer");
    if (s==true)
this.productService.onDelete12(p).subscribe(
  data=>{
    this.getAllProduct();
  })
  }
  getnewProduct(){
   this.router.navigateByUrl("/newProduct")
  }
  onEdit(p:Product){
    alert("explosion");
    this.router.navigateByUrl("/editProduct/"+p.id)
  }
}
