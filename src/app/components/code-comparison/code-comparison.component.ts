import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-code-comparison',
    templateUrl: './code-comparison.component.html',
   
})
export class CodeComparison implements OnInit {
    rightSidebarLinks:any=[{"id":"code-comparison","title":"Code Comparison","subLink":null},{"id":"code-comparison","title":"Code Comparison","subLink":null}];
    pageTitle:any = this.rightSidebarLinks[0];
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {
       
    }
    ngOnInit(){
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
    }
}