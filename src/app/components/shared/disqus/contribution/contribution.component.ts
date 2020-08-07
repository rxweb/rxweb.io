import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Location } from '@angular/common';

import { Http } from '@angular/http';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ApplicationBroadcaster } from '@rx/core';
import { filter } from 'rxjs-compat/operator/filter';

@Component({
    selector: 'app-contribution',
    templateUrl: './contribution.component.html',
})

export class ContributionComponent implements OnInit{
    // gitEditUrl: string = "https://github.com/rxweb/rxweb.io/edit/master/docs/reactive-form-validators";
    links: any;
    isVue:boolean=false;
    pageName:string;
    fileName: string;
    upcomingLink: string;
    constructor(private http:HttpClient,private router:Router,private applicationBroadCaster: ApplicationBroadcaster,
    ) {
        router.events.subscribe((val) => {
      
         
          })
        if(router.url.includes("rx-web-core")){
        // this.http.get('https://rxwebioassets.blob.core.windows.net/$web/json/rxwebcore-links.json').subscribe((response: any) => {
        //     this.links = response;
        //     var currentObjIndex = this.links.findIndex(a => a.path == this.fileName);
        //     if (currentObjIndex != undefined) {
        //       currentObjIndex++;
        //       var nextObj = this.links[currentObjIndex];
        //       this.upcomingLink = nextObj.title;
        //     }
        //   })
        // }
        // else{
        //   this.http.get('https://rxwebioassets.blob.core.windows.net/$web/json/search1.json').subscribe((response: any) => {
        //     this.links = response;
        //     var currentObjIndex = this.links.findIndex(a => a.path == this.fileName);
        //     if (currentObjIndex != undefined) {
        //       currentObjIndex++;
        //       var nextObj = this.links[currentObjIndex];
        //       this.upcomingLink = nextObj.title;
        //     }
        //   })
        // }
        }
    }
  
    
    ngOnInit(){
       
      
      //  if(this.router.url.includes("vue"))
      //  this.isVue = true;
    }

    // nextLink() {
    //     var currentObjIndex = this.links.findIndex(a => a.link == this.router.url);
    //     if (currentObjIndex != undefined) {
    //       currentObjIndex++;
    //       var nextObj = this.links[currentObjIndex];
    //       this.router.navigate([nextObj.link]);
    //     }
    //     document.body.scrollTop = 0;
    //   }
}
