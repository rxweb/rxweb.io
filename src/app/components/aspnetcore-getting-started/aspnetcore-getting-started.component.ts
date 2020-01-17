import { Component, OnInit, Input, OnChanges, HostListener } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Http } from "@angular/http";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  templateUrl: './aspnetcore-getting-started.component.html',
  entryComponents: [TopBarComponent]
})
export class AspNetCoreGettingStartedComponent implements OnInit {
  showComponent: boolean = false;
  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null }];
  pageTitle: any = this.rightSidebarLinks[0];
  titleData: any = { codeContent: {} };
  sticky: boolean = false;
  mainTab: string = "aspnetcore"
  videoElement: HTMLMediaElement;
  currentTime: number;
  clearTimeout: number = 0;
  aspNetCoreTabs: any = [
    { "index": "1", "time": 0, "id": "installation", "active": true, "title": "Installation", "content": "Installation Section" },
    { "index": "2", "time": 7, "id": "createproject", "active": false, "title": "Create Project", "content": "Create Project Section" },
    { "index": "3", "time": 14, "id": "runtheproject", "active": false, "title": "Run the project", "content": "Run the project section" },
    { "index": "4", "time": 21, "id": "testtheauthenticationapi", "active": false, "title": "Test the Authentication API", "content": "Test the Authentication API Section" }];

  constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http) {
    this.applicationBroadCaster.topSubscriber.subscribe(t => {
      this.titleData = t;
    })
  }

  ngOnInit(): void {
    this.applicationBroadCaster.topSubject.next(this.pageTitle);
    this.showComponent = true;
    //this.activePlayItem(1, (this.aspNetCoreTabs[1].time - this.aspNetCoreTabs[0].time) * 1000)

    // this.clearTimeout = window.setTimeout(() => {
    for (let i = 1; i < this.aspNetCoreTabs.length; i++) {
      this.clearTimeout = window.setTimeout(() => {
        this.activeTab(this.aspNetCoreTabs[i]);
      }, this.aspNetCoreTabs[i].time)
      // }, 7000)
    }
    // }, 7000)
  }

  goToDuration(duration: number, id: string) {
    this.videoElement = <HTMLMediaElement>document.getElementById(id);
    this.videoElement.currentTime = duration;
    if (this.videoElement && this.videoElement.paused)
      this.videoElement.play();
  }

  activePlayItem(index: number, timeout: number) {
    debugger
    this.clearTimeout = window.setTimeout(() => {
      this.activeTab(this.aspNetCoreTabs[index]);
    }, timeout)
  }

  activeTab(tab: any) {
    debugger
    this.aspNetCoreTabs.forEach(t => {
      t.active = false;
    })
    tab.active = true
    this.goToDuration(tab.time, 'aspnetcore-video')
  }

}
