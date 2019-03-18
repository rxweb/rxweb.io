import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-whats-new',
    templateUrl: './whats-new.component.html'
})
export class WhatsNewComponent implements OnInit {
    sticky: boolean = false;
    showComponent:boolean = false;
    rightSidebarLinks:any=[{"id":"whats-new","title":"What's New","subLink":null},
    {"id":"1.8.4","title":"1.8.4","subLink":null},
    {"id":"1.8.3","title":"1.8.3","subLink":null},
    {"id":"1.8.2","title":"1.8.2","subLink":null},
    {"id":"180","title":"1.8.0","subLink":null}
  ];
  pageTitle:any = this.rightSidebarLinks[0];
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {  this.applicationBroadcaster.topSubject.next(this.pageTitle); }

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