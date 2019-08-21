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
import { Router } from '@angular/router';

@Component({
    selector: 'app-right-sidebar',
    templateUrl: './right-sidebar.component.html',
})

export class RightSideBarComponent implements OnInit {
    public feedbackForm: FormGroup
    sticky: boolean = false;
    validationName: string;
    mainType: string;
    toogleOpen: boolean = true;
    showExample: boolean = true;
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    constructor(
        private http: HttpClient, private router: Router, private formBuilder: RxFormBuilder
    ) {
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
        var splitedArray = location.pathname.split("/");
        this.mainType = splitedArray[1];
        this.validationName = splitedArray[2];
        if (splitedArray.length > 0 && splitedArray[1]) {
            switch (splitedArray[1]) {
               
                case "static-binding":
                    this.gitEditUrl += "docs/dynamic-forms/static-binding/" + splitedArray[2] + ".md"
                case "conditional-binding":
                    this.gitEditUrl += "docs/dynamic-forms/conditional-binding/" + splitedArray[2] + ".md"
                case "controls":
                    this.gitEditUrl += "docs/dynamic-forms/controls/" + splitedArray[2] + ".md"
                    case "dynamic-forms":
                            this.gitEditUrl += "docs/dynamic-forms/" + splitedArray[2] + ".md"
            }
        }
        else if (splitedArray.length > 0 && splitedArray[0] == "changelog") {
            this.gitEditUrl += "CHANGELOG.md"
        }
        if (this.mainType != "community") {
            this.sidebarLinks.splice(0, 1);
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
        var splitedArray = location.pathname.split('/');
        if (splitedArray[3])
            this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
        else
            this.router.navigate(['/', splitedArray[1], splitedArray[2]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
    }
}
