import { Pipe, PipeTransform, Output, EventEmitter } from '@angular/core';
import { Component, OnInit, HostListener } from '@angular/core';
import { Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { FeedbackModel } from "src/app/components/shared/right-sidebar/domain/feedback.model";
import { Http } from "@angular/http";
import { RequestOptionsArgs } from "@angular/http";
import { RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-right-sidebar',
    templateUrl: './right-sidebar.component.html',
})

export class RightSideBarComponent implements OnInit {

    public feedbackForm: FormGroup
    sticky: boolean = false;
    gitAsideUrl: SafeResourceUrl;
    validationName: string;
    isGitEditUrlShow: boolean = true;
    mainType: string;
    toogleOpen: boolean = true;
    showExample: boolean = true;
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    constructor(
        private http: HttpClient, private router: Router, private formBuilder: RxFormBuilder, private sanitizer: DomSanitizer
    ) {
        this.gitAsideUrl = sanitizer.bypassSecurityTrustResourceUrl("https://gitter.im/rxweb-project/rxweb/~embed");
    }
    @Input('sidebarLinks') sidebarLinks: any = {};
    showComponent: boolean = false;
    contributorList: any = [];
    gitEditUrl: string = "https://github.com/rxweb/rxweb.io/edit/master/";
    @HostListener('window:scroll', ['$event'])
    handleScroll() {
        const windowScroll = document.documentElement.scrollTop;
        if (windowScroll >= 50) {
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }

    ngOnInit(): void {
        if (this.router.url.includes('whats-new') || this.router.url.includes('whats-next') || this.router.url.includes('why') || this.router.url.includes('getting-started') || this.router.url.includes('reactive-form-config'))
            this.isGitEditUrlShow = false;
        var splitedArray = this.router.url.split("/");
        this.mainType = splitedArray[1];
        this.validationName = splitedArray[2];
        if (splitedArray.length > 0 && splitedArray[1]) {

            switch (splitedArray[1]) {
                case "decorators":
                    this.gitEditUrl += "docs/reactive-form-validators/decorators/" + splitedArray[2] + ".md"
                    break;
                case "form-validations":
                    this.gitEditUrl += "docs/reactive-form-validators/validation-decorators/" + splitedArray[2] + ".md"
                    break;
                case "api":
                    this.gitEditUrl += "docs/reactive-form-validators/api/" + splitedArray[2] + ".md"
                    break;
                case "community":
                    this.gitEditUrl += "docs/community/" + splitedArray[2] + ".md"
                    break;
                case "sanitization":
                    this.gitEditUrl += "docs/sanitization/" + splitedArray[2] + ".md"
                    break
                case "how-to":
                    this.gitEditUrl += "docs/how-to/" + splitedArray[2] + ".md"
                    break
                case "reactive-dynamic-forms":
                    this.gitEditUrl += "docs/dynamic-forms/" +
                     splitedArray[3] + ".md"
                case "rx-web-core":
                if(splitedArray[4])
            
                this.gitEditUrl += "docs/rx-web-core/" + splitedArray[2] +"/" + splitedArray[3] + "/" + splitedArray[4] + ".md"               
                else
                this.gitEditUrl += "docs/rx-web-core/" + splitedArray[2] +"/" + splitedArray[3] + ".md" 
            }
        }
        else if (splitedArray.length > 0 && splitedArray[0] == "changelog") {
            this.gitEditUrl += "CHANGELOG.md"
        }
        if (this.mainType != "community") {
        //    this.sidebarLinks.splice(0, 1);
        }
        this.showComponent = true;

    }

    scrollTo(section) {
        var node = document.querySelector('#' + section);
        node.scrollIntoView(true);
        var scrolledY = window.scrollY;
        if (scrolledY) {
            window.scroll(0, scrolledY - 62);
        }
        return false;
    }


    routeExample() {
        this.toogleOpen = !this.toogleOpen;
        this.showExample = !this.showExample;
        var splitedArray = this.router.url.split('/');
        if (splitedArray[4])
            this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3], splitedArray[4]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
        else
            this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
    }
}
