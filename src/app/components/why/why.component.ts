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
    codeContent: any;
    selectedData: any = "Reactive Forms";
    displayData : string = "";
    constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
        activateRoute.queryParams.subscribe(t => {
            debugger;
            this.selectedData = t;
            if(this.selectedData == "reactive-forms")
            this.displayData = "Dynamic Forms"
            else
            this.displayData = "Reactive Forms"
        })

    }
    ngOnInit() {
        document.title = "Why - RxWeb Docs";
        this.http.get(`assets/json/generator/why/${this.selectedData.package}.json`).subscribe(response => {
            this.codeContent = response;
        });
    }

    loadWhyData(packageName: string) {
        this.http.get(`assets/json/generator/why/${packageName}.json`).subscribe(response => {
            this.codeContent = response;
        });
    }

}