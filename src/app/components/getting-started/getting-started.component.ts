import { Component, OnInit, Input, OnChanges, HostListener } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Http } from "@angular/http";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';


@Component({
  templateUrl: './getting-started.component.html',
})
export class GettingStartedComponent implements OnInit {
  showComponent: boolean = false;
  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null },{ "id": "examples", "title": "Installation", "subLink": null }, { "id": "goal", "title": "Goal", "subLink": null }];
  pageTitle:any = this.rightSidebarLinks[0];
  importModuleContent: string;
  options: any = { responseType: 'text' };
  codeContent: any;
  globalValidationMessageContent: string;
  mainTab: string = "installation"
  reactiveFormBasedValidation: string = "Example";
  templateFormBasedValidation: string = "Example";
  modelBasedFormValidation: string = "Example";
  titleData: any = { codeContent: {} };
  sticky: boolean = false;
  templateDrivenType: string = "directives";
  constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http
  ) {
    this.applicationBroadCaster.topSubscriber.subscribe(t => {
      this.titleData = t;
    })
  }

  ngOnInit(): void {
    this.http.get('assets/json/generator/getting-started/getting-started.json?v=' + environment.appVersion).subscribe(response => {
      this.codeContent = response.json();
      this.showComponent = true;
    });
    this.applicationBroadCaster.topSubject.next(this.pageTitle);
  
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
}
