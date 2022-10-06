import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRemove]',
})
export class RemoveDirective {
  // @Input() appRemove = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.display = 'none';
  }
}

// @Directive({
//   selector: '[appHighlight]',
// })
// export class HighlightDirective {

//   @HostListener('mouseenter') onMouseEnter() {
//     this.highlight(this.appHighlight);
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight(['', '']);
//   }

//   @Input() appHighlight = ['', ''];
// }
