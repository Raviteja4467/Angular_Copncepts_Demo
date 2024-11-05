import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // @ViewChild("para") para:ElementRef
  // test(){
  //   console.log(this.para.nativeElement.innerText)
  // }

  // @ViewChildren("head") head
  // test1(){
  //   for(let ele of this.head){
  //     console.log(ele.nativeElement.innerText)
  //   }
  // }

  // ngAfterViewInit(){
  //   console.log(this.para.nativeElement.innerText)
  // }



// i;
//   m1(){
//     this.i++;
//   }



  
  ngOnInit(){

    // Promise 

  // let p = new Promise((resolve, reject) => {
  //     console.log('This is Promise');
  //     reject('This is failure response');
  //     resolve('This is success response2');
  //     resolve('This is success response');
  //     resolve('This is success response1');
  //   });

  //   p.then(
  //     (s) => {
  //       console.log("success");

  //       console.log(s);
  //     },
  //     (f) => {
  //       console.log("failure");
  //       console.log(f);
  //     }
  //   );


    
  //obserable

let o = new Observable((response) => {
      console.log('This is Observable');
      response.next('This is response1');
      response.next('This is response2');
      response.next('This is response3');
      response.complete();
      response.error('This is error');
     
    });

    o.subscribe(
      (s) => {
        console.log(1);
        console.log(s);
      },
      (f) => {
        console.log(2);
        console.log(f);
      },
      () => {
        console.log("complete")
      }
    );
  }



}
