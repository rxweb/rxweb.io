import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-radio-inline',
    templateUrl: './radio-inline.component.html'
})

export class RadioInlineComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [
        {
            name: "skills",
            type: "radio",
            source: [{ value: 1, text: "Angular" }, { value: 2, text: "React" }, { value: 3, text: "Vue" }],
            inline: true,
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