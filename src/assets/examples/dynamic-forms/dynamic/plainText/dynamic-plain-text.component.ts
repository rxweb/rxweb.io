import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-plainText',
    templateUrl: './dynamic-plain-text.component.html'
})

export class DynamicPlainTextComponent implements OnInit {
    serverData = [
        {
            name: "email",
            type: "text",
            value: "email@example.com",
            ui: {
                viewMode: {
                    horizontal: {
                        label: ["col-sm-2", "col-form-label"],
                        div: ["col-sm-10"]
                    }
                },
                label: "Email",
                readonly: true
            }
        },
        {
            name: "password",
            type: "password",
            value: "email@example.com",
            ui: {
                viewMode: {
                    horizontal: {
                        label: ["col-sm-2", "col-form-label"],
                        div: ["col-sm-10"]
                    }
                },
                label: "Password",
                placeholder: "Password"
            }
        },

    ]

    uiBindings: string[] = ["email","password"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
            isPlainTextMode: true
        });
    }
}