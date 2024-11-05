import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  name:String="This site belongs to Ravi"
  getFunc(){
    var s="hello"
    return s
  }

  public emp={
    name:"Raviteja",
    age:21

  }

  employee=[
    {id:1 , name:"Ravi"},
    {id:2 , name:"Ravi1"},
    {id:3 , name:"Ravi2"}
  ]


  // Pipes
  title="Ravi"

}
