import { OnInit, Component } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: './getting-started.component.html',
  })
  export class GettingStartedComponent implements OnInit {
    
  showComponent: boolean = false;
  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null }];  
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
    this.showComponent = true;
    this.applicationBroadCaster.topSubject.next(this.pageTitle);
  }
      
  }