import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  defaultHoverColor :string = '#C0FFFF';
  defaultBackColor :string = 'LightCyan';

  @Input('appHighlight') hoverColor :any = this.defaultHoverColor;
  @Input() defaultColor :string = this.defaultBackColor;
  @HostBinding('style.backgroundColor') backgroundColor :string = this.defaultColor;

  @HostListener('mouseenter') evidenzia () {
    this.backgroundColor = this.hoverColor ? this.hoverColor : this.defaultHoverColor;
  }

  @HostListener('mouseleave') rilascia () {
    this.backgroundColor = this.defaultColor ? this.defaultColor : this.defaultBackColor;
  }

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}