import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, action, FormControlConfig } from "@rxweb/reactive-form-validators";
import { CssClassNamesModel } from "./cssClassName.model";

@Component({
    selector: 'app-cssClassNames-conditional',
    templateUrl: './cssClassNames-conditional.component.html'
})
export class CssClassNamesConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'firstName',
            type: 'textbox',
            ui: {
                cssClassNames: ['col-6','font-italic'],
                label: 'First Name'
            }
        },
        {
            name: 'lastName',
            type: 'textbox',
            actionKeyNames: ["onlyCssClassNames"],
            modelName: 'cssClassNames',
            ui: {
                label: 'Last Name'
            }
        }
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['firstName','lastName'];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxFormBuilder) {}

    ngOnInit() {
        this.dynamicFormConfiguration = {
            fieldConfigModels: [{
                modelName: 'cssClassNames',
                model: CssClassNamesModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}