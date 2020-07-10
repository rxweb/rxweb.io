import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-customSizing',
    templateUrl: './dynamic-custom-sizing.component.html'
})

export class DynamicCustomSizingComponent implements OnInit {
    serverData = [{
        name: "firstname",
        type: "text",
        ui: {
            class: ["form-control-lg","lg-control"],
            placeholder: ".form-control-lg",
        }
    },
    {
        name: "middlename",
        type: "text",
        ui: {
            placeholder: "Default Input"
        }
    },
    {
        name: "lastname",
        type: "text",
        ui: {
            class: ["form-control-sm"],
            placeholder: ".form-control-sm"
        }
    }
    ]

    uiBindings: string[] = ["firstname","middlename","lastname"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}