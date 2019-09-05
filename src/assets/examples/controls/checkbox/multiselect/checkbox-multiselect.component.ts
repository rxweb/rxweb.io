import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-checkbox-multiselect',
    templateUrl: './checkbox-multiselect.component.html'
})

export class CheckboxMultiselectComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [
        {
            name: "skills",
            type: "checkbox",
            multiselect: true,
            source: [{ value: 1, text: "Angular" },{ value: 2, text: "MVC" },{ value: 3, text: "SQL Server" }],
            ui: {
                label: 'Skills'
            }
        }
    ]

    uiBindings: string[] = ["skills"];
    
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}