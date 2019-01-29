import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

    @Input('appHighlight') highlightColor: string;
    @Input() highlightColor2: string;

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || this.highlightColor2 || 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}
