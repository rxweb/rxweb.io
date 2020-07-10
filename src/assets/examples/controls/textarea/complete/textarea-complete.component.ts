import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-textarea-complete',
    templateUrl: './textarea-complete.component.html'
})

export class TextareaCompleteComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [
        {
            name: "address",
            type: "textarea",
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