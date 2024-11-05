import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  constructor(private _userServices:ProductService, private _formBuilder:FormBuilder){

  }

//   registrationForm=new FormGroup({
//     userName: new FormControl('Ravi',[Validators.required]),
//     password: new FormControl(),
//     cpassword: new FormControl(),
//     city: new FormControl(),
//     state: new FormControl(),
//     pincode: new FormControl(),
// })

registrationForm = this._formBuilder.group({
  userName: ['', [Validators.required,Validators.minLength(5)]],
  password: ['',[Validators.required]],
  cpassword: ['',[Validators.required]],
  city: ['Hyd',[Validators.required]],
  state: ['Tel',[Validators.required]],
  pincode: ['500047',[Validators.required]],
});

  postData(){
    console.log(this.registrationForm.value)
    this._userServices.addUser(this.registrationForm.value).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }

  get userName(){
    return this.registrationForm.get('userName')
}

}
