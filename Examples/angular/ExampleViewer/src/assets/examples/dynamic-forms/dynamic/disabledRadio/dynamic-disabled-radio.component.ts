import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-disabledRadio',
    templateUrl: './dynamic-disabled-radio.component.html'
})

export class DynamicDisabledRadioComponent implements OnInit {
    serverData = [
        {
            name: "defaultRadio",
            type: "radio",
            source: [{ value: 1, text: "Default radio" },{ value: 2, text: "Second default radio" },{ value: 3, text: "Disabled radio", disabled: true }]
        }
    ]

    uiBindings: string[] = ["defaultRadio"];
    
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}