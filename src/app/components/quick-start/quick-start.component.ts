import { Component, OnInit, Input, OnChanges, HostListener } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Http } from "@angular/http";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  templateUrl: './quick-start.component.html',
  entryComponents:[TopBarComponent]
})
export class QuickStartComponent implements OnInit {

  mainTab: string = "template";

  showComponent: boolean = false;

  rightSidebarLinks: any = [{ "id": "quick-start", "title": "Quick Start", "subLink": null },{ "id": "quick-start", "title": "Quick Start", "subLink": null }];
  pageTitle: any = this.rightSidebarLinks[0];
  // titleData: any = { codeContent: {} };
  sticky: boolean = false;
  constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http) {
    this.applicationBroadCaster.topSubject.subscribe(t=>{
      this.rightSidebarLinks = t.rightSidebarLinks;
      
    })
  }

  ngOnInit(): void {
    debugger;
    this.applicationBroadCaster.topSubject.next(this.pageTitle);
    this.showComponent = true;
  }

}
