import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';

@Component({
    selector: 'app-vue-getting-started',
    templateUrl: './vue-getting-started.component.html',
    entryComponents:[TopBarComponent]
})
export class VueGettingStartedComponent implements OnInit {
    sticky: boolean = false;
    showComponent:boolean = false;
    rightSidebarLinks:any=[{"id":"vue-getting-started","title":"Getting-Started","subLink":null},{"title":"Getting-Started","subLink":null}
   ];
    pageTitle:any = this.rightSidebarLinks[0];
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {
        
     }

    ngOnInit() {
        this.applicationBroadcaster.topSubject.next(this.rightSidebarLinks);
        this.showComponent = true;
    }
  
     scrollTo(section) {
         location.hash = section;
         return false;
     }
}
