import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-tdf-forms',
  templateUrl: './tdf-forms.component.html',
  styleUrls: ['./tdf-forms.component.css']
})
export class TdfFormsComponent {
  courses=["Java","Python","Angular","Sql"]

  constructor(private _userService:ProductService){

  }

  ngOnInit(){
    this._userService.getProduct().subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }

  submit(data){
    console.log(data.value)
    this._userService.addUser(data.value).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }
}
