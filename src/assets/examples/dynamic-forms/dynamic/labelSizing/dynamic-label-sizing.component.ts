import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-labelSizing',
    templateUrl: './dynamic-label-sizing.component.html'
})

export class DynamicLabelSizingComponent implements OnInit {
    serverData = [{
        name: "email",
        type: "text",
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-form-label-sm", "col-sm-2", "label-font-weight"],
                    div: ["col-sm-10"],
                }
            },
            class: ["form-control-sm"],
            label: "Email",
            placeholder: "col-form-label-sm",
        }
    },
    {
        name: "recoveryEmail",
        type: "text",
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-sm-2", "label-font-weight"],
                    div: ["col-sm-10"]
                }
            },
            label: "Email",
            placeholder: "col-form-label"
        }
    },
    {
        name: "personalMailId",
        type: "text",
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-form-label-lg", "col-sm-2", "lg-label", "label-font-weight"],
                    div: ["col-sm-10"]
                }
            },
            class: ["form-control-lg","lg-control"],
            label: "Email",
            placeholder: "col-form-label-lg"
        }
    }
    ]

    uiBindings: string[] = ["email", "recoveryEmail", "personalMailId"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }

    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}