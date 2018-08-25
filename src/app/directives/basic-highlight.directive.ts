import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[artBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#438542';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
