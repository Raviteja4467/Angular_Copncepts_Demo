import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
  constructor(){
    console.log("i am constructor")
  }

  myClass="textColor"

  myGroup={
    "textColor" : true,
    "textSize" : false
  }

  ngOnInit(){
    console.log("this is ngOnInit")
    setTimeout(() => {
        this.myClass="textColorRed";
    }, 5000);
  }

  isRequired:boolean=true;

}
