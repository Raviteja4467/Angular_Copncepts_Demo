import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'chipl20';
  a:number=10;
  private b:boolean=false;
  c:string="hi";
  d:any="Ravi";
  e=22;
  f="teja";

  getStudent(){
    this.a=20;
    this.b=true;
    this.c="hiii";
    this.d=40;
    var z=10;
    let v="hello";
  }
  getStudentMarks(){
    this.getStudent();
    console.log();
    console.dir();
  }

}
