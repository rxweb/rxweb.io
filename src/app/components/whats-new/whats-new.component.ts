import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-whats-new',
    templateUrl: './whats-new.component.html'
})
export class WhatsNewComponent implements OnInit {
    sticky: boolean = false;
    showComponent:boolean = false;
    rightSidebarLinks:any=[
        {"id":"stronglyType","title":"1.8.4","subLink":null},
        {"id":"boolean","title":"1.8.3","subLink":null},
        {"id":"patchmodel","title":"1.8.2","subLink":null},
        {"id":"disable","title":"1.8.0","subLink":null}
  ];
  pageTitle:any = {"title":"What's New","subLink":null}
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {      
     }

    ngOnInit() {
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
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
