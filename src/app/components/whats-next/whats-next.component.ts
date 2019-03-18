import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-whats-next',
    templateUrl: './whats-next.component.html'
})
export class WhatsNextComponent implements OnInit {
    sticky: boolean = false;
    showComponent:boolean = false;
    rightSidebarLinks:any=[{"id":"whats-next","title":"What's Next","subLink":null},
     {"id":"our-vision","title":"Core Values","subLink":null},
     {"id":"stable-features","title":"Stable features","subLink":null},
    {"id":"excellent-documentation","title":"Excellent Documentation","subLink":null},
    {"id":"reliability","title":"Reliability","subLink":null},
    {"id":"upcoming-features","title":"Upcoming features","subLink":null}];
    pageTitle:any = this.rightSidebarLinks[0];
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
     }

    ngOnInit() {
        this.showComponent = true;
    }
    @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = document.documentElement.scrollTop;
          if(windowScroll >= 50){
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
