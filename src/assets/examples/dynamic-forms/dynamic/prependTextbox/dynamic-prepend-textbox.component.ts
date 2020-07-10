import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-prependTextbox',
    templateUrl: './dynamic-prepend-textbox.component.html'
})

export class DynamicPrependTextboxComponent implements OnInit {
    serverData = [{
        name: "prependLeft",
        type: "text",
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-sm-2"],
                    div: ["col-sm-10"],
                }
            },
            prependText: { left: "@" },
            label: "Prepend Left",
            placeholder: "PrependLeft"
        }
    },
    {
        name: "prependRight",
        type: "text",
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-sm-2"],
                    div: ["col-sm-10"],
                }
            },
            prependText: { right: "@" },
            label: "Prepend Right",
            placeholder: "PrependRight"
        }
    },
    {
        name: "prependBoth",
        type: "text",
        ui: {
            viewMode: {
                horizontal: {
                    label: ["col-sm-2"],
                    div: ["col-sm-10"],
                }
            },
            prependText: { left: "@", right: ".com" },
            label: "Prepend Both",
            placeholder: "PrependBoth"
        }
    }
    ]

    uiBindings: string[] = ["prependLeft", "prependRight", "prependBoth"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }

    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}