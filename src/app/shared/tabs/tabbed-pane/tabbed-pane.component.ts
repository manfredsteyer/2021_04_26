import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {

  // Starke Kopplung
  tabs: TabComponent[] = [];

  constructor() { }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }

  ngOnInit(): void {
  }

  register(tab: TabComponent): void {
    this.tabs.push(tab);
  }

  activate(tabToActivate: TabComponent): void {
    for(const t of this.tabs) {
      t.visible = (t === tabToActivate);
    }
  }


}
