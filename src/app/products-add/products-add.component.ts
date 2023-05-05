import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  formGroup?:FormGroup;
  submited:boolean=false;

  constructor(public fb:FormBuilder,private productService:ProductsService){}

  ngOnInit(): void {
    this.formGroup=this.fb.group({
     name:["",Validators.required],
     price:[0,Validators.required],
     quantity:[0,Validators.required],
     selected:[true,Validators.required],
     available:[true,Validators.required],
    });
  }

  saveProducts(){
    this.submited=true;
    if(this.formGroup?.invalid) return;
  this.productService.save(this.formGroup?.value).subscribe(
    data=>{
      alert("success");
    }
  )
  }

}
