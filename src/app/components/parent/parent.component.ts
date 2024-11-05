import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  msg="This msg from Parent"
  res
  ravi
  requestSent(sms){
    this.ravi=sms
  }

  i=0
  updateMsg(){
   // this.msg="This msg from Parent "+this.i++

   this.sData.role="Developer "+this.i++
  }

  sData={id:1,name:"Ravi",role:"Student"}


}
