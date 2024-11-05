import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-spring1',
  templateUrl: './spring1.component.html',
  styleUrls: ['./spring1.component.css']
})
export class Spring1Component {
  constructor(private _userServices:ProductService, private _formBuilder:FormBuilder){

  }

  registrationForm = this._formBuilder.group({
    id: [],
    brand: [], 
    price: []
    
  });
  
    postData(){
      console.log(this.registrationForm.value)
      this._userServices.addUser(this.registrationForm.value).subscribe(
        (res)=>{
          console.log(res);
        }
      )
    }
  
  //   get userId(){
  //     return this.registrationForm.get('userId')
  // }
  
}
