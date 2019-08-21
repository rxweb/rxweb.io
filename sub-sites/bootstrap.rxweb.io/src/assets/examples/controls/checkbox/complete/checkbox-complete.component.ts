import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-checkbox-complete',
    templateUrl: './checkbox-complete.component.html'
})

export class CheckboxCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [
        {
            name: "skills",
            type: "checkbox",
            multiselect:true,
            source: [{ value: 1, text: "Angular" }, { value: 2, text: "React" }, { value: 3, text: "Vue" }],
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
        console.log(this.dynamicFormBuildConfig.formGroup.controls.skills)
    }
}