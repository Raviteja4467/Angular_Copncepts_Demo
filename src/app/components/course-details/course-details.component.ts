import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  constructor(private _cs:CourseService,
                  private _router: Router  ){

  }
  
  course=this._cs.getCourse()
  
  m1(cid){
    console.log(cid)
    this._router.navigate(['/coursedetails',cid])
  }


  // course=[
  //   {id:1,name:"Java",fee:"25000"},
  //   {id:2,name:"Python",fee:"20000"},
  //   {id:3,name:"Sql",fee:"10000"}

  // ]
}
