import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-contributors',
    templateUrl: './contributors-component.html',
   
})
export class ContributorsComponent implements OnInit {
    rightSidebarLinks:any=[{"id":"contributors","title":"Hidden Gems","subLink":null},{"title":"Hidden Gems","subLink":null}];
    pageTitle:any = this.rightSidebarLinks[0];
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {
       
    }
    ngOnInit(){
        document.title = "Hidden Gems - RxWeb Docs";
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
    }
}