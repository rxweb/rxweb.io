import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Location } from '@angular/common';
import * as moment from 'src/assets/scripts/moment.js'
import * as showdown from 'src/assets/scripts/showdown.js'
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contribution',
    templateUrl: './contribution.component.html',
})

export class ContributionComponent implements OnInit{
    links: any;
    fileName: string;
    upcomingLink: string;
    constructor(private http:HttpClient,private router:Router
    ) {
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
    gitEditUrl: string = "https://github.com/rxweb/rxweb.io/edit/master/docs/reactive-form-validators";
    pageName:string;
    ngOnInit(){
        var splitedArray = location.pathname.split("/");
        if(splitedArray.length > 0 && splitedArray[1])
        {
            switch(splitedArray[1])
            {
                case "decorators":
                    this.gitEditUrl += "/decorators/" + splitedArray[2] + ".md"    
                    this.pageName = splitedArray[2]
                    break;
                case "form-validations":
                    this.gitEditUrl += "/validation-decorators/" + splitedArray[2] + ".md"    
                    this.pageName = splitedArray[2]
                    break;
                case "api":
                    this.gitEditUrl += "/api/ReactiveFormConfig.md"    
                    this.pageName = "ReactiveFormConfig"
                    break;
                case "getting-started":
                    this.gitEditUrl += "/getting-started.md"    
                    this.pageName = "Getting Started"
                    break;
            }
        }
    }

    nextLink() {
        debugger;
        var currentObjIndex = this.links.findIndex(a => a.href == location.pathname);
        if (currentObjIndex != undefined) {
          currentObjIndex++;
          var nextObj = this.links[currentObjIndex];
          this.router.navigate([nextObj.href]);
        }
      }
}
