import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamicrange-complete',
    templateUrl: './dynamicrange-complete.component.html'
})

export class DynamicrangeCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "price",
        type: "range",
        ui: {
            label: 'Price'
        }
    }]
    uiBindings: string[] = ["price"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}