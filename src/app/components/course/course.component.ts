import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
constructor(private _course:CourseService){

}

course=this._course.getCourse()

  // course=[
  //   {id:1,name:"Java",fee:"25000"},
  //   {id:2,name:"Python",fee:"20000"},
  //   {id:3,name:"Sql",fee:"10000"}

  // ]

  ngOnDestroy(){
    console.log("this is ngOnDestroy")
  }
  
}
