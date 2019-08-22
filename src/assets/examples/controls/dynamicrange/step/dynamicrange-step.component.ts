import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamicrange-step',
    templateUrl: './dynamicrange-step.component.html'
})

export class DynamicrangeStepComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [{
        name: "price",
        type: "range",
        additionalConfig: {
            prop: {
                min: 1,
                max: 3,
                step: 0.5
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