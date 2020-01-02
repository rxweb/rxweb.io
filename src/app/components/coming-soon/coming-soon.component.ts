import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-coming-soon',
    templateUrl: './coming-soon.component.html',
   
})
export class ComingSoonComponent implements OnInit {
    rightSidebarLinks:any=[{"id":"contributors","title":"Coming Soon","subLink":null},{"id":"contributors","title":"Coming Soon","subLink":null}];
    pageTitle:any = this.rightSidebarLinks[0];
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {
       
    }
    ngOnInit(){
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
    }
}