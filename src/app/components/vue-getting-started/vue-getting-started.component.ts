import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-vue-getting-started',
    templateUrl: './vue-getting-started.component.html'
})
export class VueGettingStartedComponent implements OnInit {
    sticky: boolean = false;
    showComponent:boolean = false;
    rightSidebarLinks:any=[{"id":"whats-next","title":"What's Next","subLink":null},
   ];
    pageTitle:any = this.rightSidebarLinks[0];
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {
        
     }

    ngOnInit() {
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
        this.showComponent = true;
    }
  
     scrollTo(section) {
         location.hash = section;
         return false;
     }
}
