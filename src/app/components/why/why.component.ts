import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppExampleRunnerComponent } from '../shared/app-example-runner/app-example-runner.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-why',
    templateUrl: './why.component.html',
    entryComponents: [AppExampleRunnerComponent]
})
export class WhyComponent implements OnInit {
    codeContent: any = [];
    selectedData: any = "Reactive Forms";
    displayData: string = "";
    listItems: any = [];
    activeListItem: string = "All";
    constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
        activateRoute.queryParams.subscribe(t => {
            this.selectedData = t;
            if (this.selectedData == "reactive-forms")
                this.displayData = "Dynamic Forms"
            else
                this.displayData = "Reactive Forms"
        })
    }

    ngOnInit() {
        document.title = "Why - RxWeb Docs";
        this.http.get(`assets/json/generator/why/${this.selectedData.package}.json`).subscribe(response => {
            this.codeContent = response;
            console.log(this.codeContent);
            if (this.codeContent)
                this.codeContent.forEach(element => {
                    this.listItems.push(element.title);

                });
        });
    }

    loadWhyData(packageName: string) {
        this.listItems = [];
        this.http.get(`assets/json/generator/why/${packageName}.json`).subscribe(response => {
            this.codeContent = response;
            if (this.codeContent)
                this.codeContent.forEach(element => {
                    this.listItems.push(element.title);
                });
        });
    }

    scrollTo(section) {
        debugger
        var node = document.querySelector('#' + section);
        node.scrollIntoView(true);
        var scrolledY = window.scrollY;
        if (scrolledY) {
            window.scroll(0, scrolledY - 62);
        }
        return false;
    }

}