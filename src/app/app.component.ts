import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World!';
  constructor(private numberPipe: DecimalPipe) {

    const fmt = numberPipe.transform(1111111.95, '15.2', 'de');
    console.debug('fmt', fmt);
  }
}
