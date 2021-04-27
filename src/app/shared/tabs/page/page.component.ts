import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() pages = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clickMe() {
    alert('Aua!');
  }

}
