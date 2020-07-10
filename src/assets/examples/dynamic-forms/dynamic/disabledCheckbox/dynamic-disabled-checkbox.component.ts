import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-disabledCheckbox',
    templateUrl: './dynamic-disabled-checkbox.component.html'
})

export class DynamicDisabledCheckboxComponent implements OnInit {
    serverData = [
        {
            name: "defaultCheckbox",
            type: "checkbox",
            source: [{ value: 1, text: "Default checkbox" },{ value: 2, text: "Disabled checkbox", disabled: true }]
        }
    ]

    uiBindings: string[] = ["defaultCheckbox"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}