import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[appClickStopPropagation]'
})
export class ClickStopPropagationDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  public ngAfterViewInit(): void {
    fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click', { capture: true })
      .subscribe(event => {
        // console.log('catched');
        event.stopPropagation();
      });
  }

}
