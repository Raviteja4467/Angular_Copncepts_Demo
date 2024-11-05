import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

    // writen code in home line 4
    @HostBinding('style.backgroundColor') c_color='red'
    @HostListener('mouseenter') c_onEnter(){
      this.c_color='blue'
    }
    @HostListener('mouseleave') c_onLeave(){
      this.c_color='yellow'
    }

  constructor() { }

}
