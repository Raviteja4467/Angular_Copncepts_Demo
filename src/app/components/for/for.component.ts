import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  names=['Ravi','Abhi','puppy','Reddy'];
  emp=[
    {id:1,name:"Ravi",role:"Student"},
    {id:2,name:"Ravi1",role:"Tester"},
    {id:3,name:"Ravi2",role:"Developer"}

  ]
}
