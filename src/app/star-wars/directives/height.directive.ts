import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHeight]'
})
export class HeightDirective {

  @Input() defaultHeight : string = '';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    let height = parseInt(this.defaultHeight);
    let color = height >= 70 && height <= 80 ? 'darkseagreen' : '';
    color = height > 80 ? 'crimson' : '';
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
