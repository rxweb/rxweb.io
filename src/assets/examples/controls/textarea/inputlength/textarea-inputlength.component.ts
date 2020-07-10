import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-textarea-inputlength',
    templateUrl: './textarea-inputlength.component.html'
})

export class TextareaInputlengthComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [
        {
            name: "address",
            type: "textarea",
            additionalConfig: {
                prop: {
                    maxLength: 10,
                    minLength: 5
                }
            },
            ui: {
                label: 'Address'
            }
        }
    ]
    
    uiBindings: string[] = ["address"];
    
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}