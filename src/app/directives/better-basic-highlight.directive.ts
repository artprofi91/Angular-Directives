import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[artBetterBasicHighlight]',
})
export class BetterBasicHighlightDirective implements OnInit {
  @Input()
  defaultColor: string = 'transparent';
  @Input()
  highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor')
  backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue',
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue',
    // );
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent',
    // );
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = this.defaultColor;
  }
}
