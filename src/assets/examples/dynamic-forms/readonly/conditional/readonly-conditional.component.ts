import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';
import { ReadonlyModel } from './readonly.model';


@Component({
    selector: 'app-readonly-conditional',
    templateUrl: './readonly-conditional.component.html'
})
export class ReadonlyConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'firstName',
            type: 'textbox',
            ui: {
                label: 'First Name'
            }
        },
        {
            name: 'lastName',
            type: 'textbox',
            actionKeyNames: ["onlyReadonly"],
            modelName: 'readonly',
            ui: {
                label: 'Last Name'
            }
        },
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['firstName','lastName'];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxFormBuilder) {}

    ngOnInit() {
        this.dynamicFormConfiguration = {
            fieldConfigModels: [{
                modelName: 'readonly',
                model: ReadonlyModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}