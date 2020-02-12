import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamicrange-value',
    templateUrl: './dynamicrange-value.component.html'
})

export class DynamicrangeValueComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [{
        name: "price",
        type: "range",
        additionalConfig: {
            prop: {
                min: 0,
                max: 5
            }
        },
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