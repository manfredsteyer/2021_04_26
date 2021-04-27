import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appClickWithWarning]'
})
export class ClickWithWarningDirective {

  @Input() warning = 'Are you sure?';
  @Output() appClickWithWarning = new EventEmitter<void>();

  @HostBinding('class') class = 'btn btn-danger';

  constructor() { }

  @HostListener('click', ['$event'])
  handleClick($event: MouseEvent): void {
    if ($event.shiftKey || confirm(this.warning)) {
      this.appClickWithWarning.emit();
    }
  }

}
