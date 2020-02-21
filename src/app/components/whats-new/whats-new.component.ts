import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-whats-new',
    templateUrl: './whats-new.component.html'
})
export class WhatsNewComponent implements OnInit {
    sticky: boolean = false;
    showComponent:boolean = false;
    
    selected:any = "";
    rightSidebarLinks:any=[
      {"id":"generic","title":"Whats New","subLink":null},
        {"id":"generic","title":"1.8.6","subLink":null},
        {"id":"requiredTrue","title":"1.9.7","subLink":null},
        {"id":"passwordValidationWithCustom","title":"1.9.6","subLink":null},
        {"id":"urlValidation","title":"1.9.5","subLink":null},
        {"id":"blankFormArray","title":"1.9.4","subLink":null},
        {"id":"dynamicConfig1","title":"1.9.3","subLink":null},
        {"id":"dynamicConfig","title":"1.9.2","subLink":null},
        {"id":"compose","title":"1.9.1","subLink":null},
        {"id":"value","title":"1.9.0","subLink":null},
        {"id":"globalBind","title":"1.8.9","subLink":null},
        {"id":"generic","title":"1.8.6","subLink":null},
        {"id":"stronglyType","title":"1.8.4","subLink":null},
        {"id":"boolean","title":"1.8.3","subLink":null},
        {"id":"patchmodel","title":"1.8.2","subLink":null},
        {"id":"disable","title":"1.8.0","subLink":null}
  ];
  pageTitle:any = {"title":"What's New","subLink":null}
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {  
          
     }

     activeTab = 'search';
    
     search(activeTab){
       this.activeTab = activeTab;
 
     }
   
     result(activeTab){
       this.activeTab = activeTab;
      
     }

    ngOnInit() {
      document.title = "Whats New - RxWeb Docs";
        this.applicationBroadcaster.topSubject.next(this.rightSidebarLinks);
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
