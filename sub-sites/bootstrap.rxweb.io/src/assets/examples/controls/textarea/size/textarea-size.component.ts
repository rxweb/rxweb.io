import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-textarea-size',
    templateUrl: './textarea-size.component.html'
})

export class TextareaSizeComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [
        {
            name: "address",
            type: "textarea",
            additionalConfig: {
                prop: {
                    rows: 5,
                    cols: 50
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