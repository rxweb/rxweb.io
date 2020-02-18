import { OnInit, Component } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: './getting-started.component.html',
  })
  export class GenericsGettingStartedComponent implements OnInit {
    codeContent:any;
  showComponent: boolean = false;
  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null },{ "id": "getting-started", "title": "Quick Start", "subLink": null }];  
  pageTitle:any = this.rightSidebarLinks[0];
  titleData: any = { codeContent: {} };
  mainTab: string = "installation"

  constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http
    ) {
      this.applicationBroadCaster.topSubscriber.subscribe(t => {
        this.titleData = t;
      })
    }

  ngOnInit(): void {
    this.http.get('assets/json/generator/rxweb-generics/generic-install.json').subscribe(response => {
      this.codeContent = response.json();
      this.showComponent = true;
});
    this.applicationBroadCaster.topSubject.next(this.pageTitle);
  }
      
  }