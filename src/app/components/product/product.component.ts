import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products;

  constructor(private _product:ProductService){

  }
  ngOnInit(){
    this._product.getProduct().subscribe(
      (res)=>{
        console.log(res);
        this.products=res.products
        console.log(this.products)
      }
    )
  }


  // to unsubscride

  // unsub:Subscription

  // ngOnInit(){
  //   this.unsub=this._product.getProduct().subscribe(
  //     (res)=>{
  //       console.log(res);
  //       this.products=res.products
  //       console.log(this.products)
  //     }
  //   )
  // }

  // ngOnDestroy(){
  //   this.unsub.unsubscribe();
  // }

  products1;

  proDelete(pid){
    this._product.delProduct(pid).subscribe(
      (res)=>{
        console.log(res);  
        this.products1=res;
      }
    )
  }
  
  //Promise
  // ngOnInit(){
  //   this._product.getProductPromise().then(
  //     (res)=>{
  //       console.log(res);
  //       this.products=res.products
  //       console.log(this.products)
  //     }
  //   )
  // }
}
