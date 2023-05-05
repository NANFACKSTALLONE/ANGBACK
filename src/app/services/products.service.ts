import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  host="localhost:3000";
  constructor(private http:HttpClient) { }
  getAllProducts(): Observable<Product[]>{

    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  getSelectedProducts(): Observable<Product[]>{

    return this.http.get<Product[]>("http://localhost:3000/products?selected=true");
  }
  getAvailableProducts(): Observable<Product[]>{

    return this.http.get<Product[]>("http://localhost:3000/products?available=true");
  }
  onSearchSt(keyword:string):Observable <Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products?name_like="+keyword);
  }
  onSelect12(product:Product):Observable<Product>{
    product.selected=!product.selected;
    return this.http.put<Product>("http://localhost:3000/products/"+product.id,product);

  }
  onDelete12(product:Product):Observable<void>{
    product.selected=!product.selected;
    return this.http.delete<void>("http://localhost:3000/products/"+product.id);

  }
  save(product:Product):Observable<Product>{

    return this.http.post<Product>("http://localhost:3000/products/",product);

  }
  getproducts(id:number): Observable<Product>{

    return this.http.get<Product>("http://localhost:3000/products/"+id);
  }
  update1products(product:Product): Observable<Product>{

    return this.http.put<Product>("http://localhost:3000/products/"+product.id,product);
  }
}
