import { AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss']
})
export class TabbedPaneComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild(PageComponent)
  page: PageComponent | undefined;

  // @ContentChildren('tab')
  @ContentChildren(TabComponent)
  tabsList: QueryList<TabComponent> | undefined;

  // Starke Kopplung
  // tabs: TabComponent[] = [];

  get tabs(): TabComponent[] {
    if (!this.tabsList) {
      return [];
    }
    return this.tabsList.toArray();
  }

  constructor() { }

  ngAfterViewInit(): void {
    if (!this.page) {
      return;
    };

    setTimeout(() => {
      if (this.page) {
        this.page.pages = this.tabs.length;
        // this.page.clickMe();
      }
    }, 0);
  }

  ngAfterContentInit(): void {
    if (!this.tabs) {
      return;
    }
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }

  ngOnInit(): void {
  }

  // register(tab: TabComponent): void {
  //   this.tabs.push(tab);
  // }

  activate(tabToActivate: TabComponent): void {
    for(const t of this.tabs) {
      t.visible = (t === tabToActivate);
    }
  }


}
