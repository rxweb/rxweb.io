import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-why',
    templateUrl: './why-component.html'
})
export class WhyRxwebComponent implements OnInit {
    constructor(private router: Router) {      
    }
    showComponent:boolean = false;
       

    ngOnInit() {
        this.showComponent = true;
    }

     scrollTo(section) {
         location.hash = section;
         return false;
     }
}