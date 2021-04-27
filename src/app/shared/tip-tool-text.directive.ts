import { Directive, ElementRef, EmbeddedViewRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[appTipToolText]'
})
export class TipToolTextDirective implements OnInit {

  @Input('appTipToolText') template: TemplateRef<unknown> | undefined;

  viewRef: EmbeddedViewRef<unknown> | undefined;

  constructor(
    private host: ElementRef, // DOM
    private viewContainer: ViewContainerRef) {
    }

    @HostListener('mouseover', ['$event'])
    handleMouseOver(): void {
      this.setVisibility(true);
    }

    @HostListener('mouseout', ['$event'])
    handleMouseOut(): void {
      this.setVisibility(false);
    }

  ngOnInit(): void {
    if (this.template) {
      this.viewRef = this.viewContainer.createEmbeddedView(this.template);
      this.setVisibility(false);
    }
  }

  setVisibility(visible: boolean) {
    if (!this.viewRef) {
      return;
    };

    this.viewRef.rootNodes.forEach(ref => {
      ref.hidden = !visible;
    });
  }

}
