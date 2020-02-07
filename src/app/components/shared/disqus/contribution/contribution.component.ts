import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Location } from '@angular/common';
import * as moment from 'src/assets/scripts/moment.js'
import * as showdown from 'src/assets/scripts/showdown.js'
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-contribution',
    templateUrl: './contribution.component.html',
})

export class ContributionComponent implements OnInit{
    gitEditUrl: string = "https://github.com/rxweb/rxweb.io/edit/master/docs/reactive-form-validators";
    links: any;
    isVue:boolean=false;
    pageName:string;
    fileName: string;
    upcomingLink: string;
    constructor(private http:HttpClient,private router:Router,private applicationBroadCaster: ApplicationBroadcaster,
    ) {
        this.applicationBroadCaster.topSubscriber.subscribe(t => {
            this.gitEditUrl = t.gitDocPath;
            this.pageName = t.title;
        });
        if(router.url.includes("rx-web-core")){
        this.http.get('assets/json/rxwebcore-links.json').subscribe((response: any) => {
            this.links = response;
            var currentObjIndex = this.links.findIndex(a => a.path == this.fileName);
            if (currentObjIndex != undefined) {
              currentObjIndex++;
              var nextObj = this.links[currentObjIndex];
              this.upcomingLink = nextObj.title;
            }
          })
        }
        else{
          this.http.get('assets/json/rxweb-links.json').subscribe((response: any) => {
            this.links = response;
            var currentObjIndex = this.links.findIndex(a => a.path == this.fileName);
            if (currentObjIndex != undefined) {
              currentObjIndex++;
              var nextObj = this.links[currentObjIndex];
              this.upcomingLink = nextObj.title;
            }
          })
        }
    }
  
    
    ngOnInit(){
       if(location.pathname.includes("vue"))
       this.isVue = true;
    }

    nextLink() {
        var currentObjIndex = this.links.findIndex(a => a.href == location.pathname);
        if (currentObjIndex != undefined) {
          currentObjIndex++;
          var nextObj = this.links[currentObjIndex];
          this.router.navigate([nextObj.href]);
        }
        document.body.scrollTop = 0;
      }
}
