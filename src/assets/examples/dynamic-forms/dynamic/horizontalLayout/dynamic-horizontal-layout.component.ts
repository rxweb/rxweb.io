import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-horizontalLayout',
    templateUrl: './dynamic-horizontal-layout.component.html'
})

export class DynamicHorizontalLayoutComponent implements OnInit {
    serverData = [{
        name: "email",
        type: "text",
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-sm-2"],
                    div: ["col-sm-10"]
                }
            },
            label: "Email",
            placeholder: "Email",
        }
    },
    {
        name: "password",
        type: "password",
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-sm-2"],
                    div: ["col-sm-10"]
                }
            },
            label: "Password",
            placeholder: "Password"
        }
    },
    {
        name: "radios",
        type: "radio",
        source: [{ value: 1, text: "First radio" },{ value: 2, text: "Second radio" },{ value: 3, text: "Third disabled radio", disabled: true }],
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-sm-2"],
                    div: ["col-sm-10"]
                }
            },
            label: "Radios"
        }
    },
    {
        name: "checkbox",
        type: "checkbox",
        source: [{ value: 1, text: "Example checkbox" }],
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-sm-2"],
                    div: ["col-sm-10"]
                }
            },
            label: "Checkbox"
        }
    }
    ]

    uiBindings: string[] = ["email","password","radios", "checkbox"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}