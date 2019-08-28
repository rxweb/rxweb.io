import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-inlineForm',
    templateUrl: './dynamic-inline-form.component.html'
})

export class DynamicInlineFormComponent implements OnInit {
    serverData = [{
        name: "name",
        type: "text",
        ui: {
            viewMode: {
                inline: {
                    label: ["sr-only"],
                    input: ["mb-2", "mr-sm-2"]
                }
            },
            class: ["mb-2", "mr-sm-2"],
            label: "Name",
            placeholder: "Jane Doe",
        }
    },
    {
        name: "username",
        type: "text",
        ui: {
            viewMode: {
                inline: {
                    label: ["sr-only"],
                    div: ["mb-2", "mr-sm-2"]
                }
            },
            label: "Username",
            prependText: { left: "@" },
            placeholder: "Username"
        }
    },
    {
        name: "Rememberme",
        type: "checkbox",
        source: [{ value: 1, text: "Remember me" }],
        ui: {
            viewMode: {
                inline: {
                    div: ["mb-2", "mr-sm-2"]
                }
            },
        }
    }
    ]

    additionalConfig = [{
        name: "submit",
        type: "button",
        ui: {
          text: "Submit",
          class: ["btn","btn-primary","mb-2"]
        }

    }]

    uiBindings: string[] = ["name", "username", "Rememberme", "submit"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormConfiguration = {additionalConfig : this.additionalConfig}
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
    }
}