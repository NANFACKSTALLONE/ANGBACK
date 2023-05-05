import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  productId!:number;
  formGroup!:FormGroup;
  submited:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
    private productServices:ProductsService,
    private fb:FormBuilder){

    this.productId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productServices.getproducts(this.productId).subscribe(
      product => {
        this.formGroup = this.fb.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required],
        });
      },
      error => {
        console.error(`An error occurred while fetching product with ID ${this.productId}:`, error);
        // Handle the error here, e.g. show a message to the user or redirect to an error page
      }
    );
  }
  UpdateProducts(){
    this.productServices.update1products(this.formGroup.value).subscribe(
      data=>{
        alert("produit modifier avec success");
      }
    );
  }
}
