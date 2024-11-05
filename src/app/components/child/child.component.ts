import { Component, EventEmitter, Input, Output, SimpleChange, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent {
  @Input() pMan
  @Output() pass = new EventEmitter()
  data="This msg is from child"
  sendData(){
    this.pass.emit(this.data)
  }

  ngOnChanges(change:SimpleChange){
    console.log(change)
    console.log("This is onchange")
  }

  @Input() StudentData;
  ngDoCheck(){
    console.log()
  }

}
