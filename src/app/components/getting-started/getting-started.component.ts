import { Component, OnInit, Input, OnChanges, HostListener } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Http } from "@angular/http";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';
declare function Gifffer(): any;

@Component({
  templateUrl: './getting-started.component.html',
  entryComponents:[TopBarComponent]
})
export class GettingStartedComponent implements OnInit {
  showComponent: boolean = false;
  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null },{ "id": "examples", "title": "Installation", "subLink": null }, { "id": "goal", "title": "Goal", "subLink": null }];
  pageTitle:any = this.rightSidebarLinks[0];
  importModuleContent: string;
  options: any = { responseType: 'text' };

  globalValidationMessageContent: string;
  mainTab: string = "installation"
  reactiveFormBasedValidation: string = "Example";
  templateFormBasedValidation: string = "Example";
  modelBasedFormValidation: string = "Example";
  codeContent:any = {"installation":"npm install @rxweb/reactive-form-validators"};
  //titleData: any = { codeContent: {} };
  sticky: boolean = false;
  templateDrivenType: string = "directives";
  constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http
  ) {
   
  }

  ngOnInit(): void {
    document.title = "Getting Started Reactive Forms - RxWeb";
  
      this.showComponent = true;
      this.giffer();
    
  //  this.applicationBroadCaster.topSubject.next(this.rightSidebarLinks);
  }
  giffer() {
    setTimeout(() => { Gifffer(); }, 10)
}
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = document.documentElement.scrollTop;
    if (windowScroll >= 50) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  scrollTo(section) {
    location.hash = section;
    return false;
  }
  changeTab(tab: string) {
    this.mainTab = tab;
    this.giffer()
}
}
