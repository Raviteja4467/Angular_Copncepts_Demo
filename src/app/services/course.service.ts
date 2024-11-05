import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourse(){
    return [
      {id:1,name:"Java",fee:"25000"},
      {id:2,name:"Python",fee:"20000"},
      {id:3,name:"Sql",fee:"10000"}
  
    ]
  }
}
