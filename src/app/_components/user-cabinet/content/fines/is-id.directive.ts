import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appIsId]'
})
export class IsIdDirective implements OnInit {
  @Input('appIsId') field;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    console.log('hi');
    if (this.field == 'id') {
      this.el.nativeElement.style.marginLeft = '3em';
    }
  }

}
