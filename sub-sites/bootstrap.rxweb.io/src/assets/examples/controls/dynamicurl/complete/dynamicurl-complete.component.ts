import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamicurl-complete',
    templateUrl: './dynamicurl-complete.component.html'
})

export class DynamicurlCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "url",
        type: "url",
        ui: {
            label: 'Website Url'
        }
    }]
    uiBindings: string[] = ["url"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}