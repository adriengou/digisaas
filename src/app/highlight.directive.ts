import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  highlight(color: string[]) {
    this.el.nativeElement.style.backgroundColor = color[0];
    this.el.nativeElement.style.color = color[1];
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(['', '']);
  }

  @Input() appHighlight = ['', ''];
}
