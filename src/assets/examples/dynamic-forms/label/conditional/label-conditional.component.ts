import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';
import { LabelModel } from './label.model'

@Component({
    selector: 'app-label-conditional',
    templateUrl: './label-conditional.component.html'
})
export class LabelConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [
        {
            name: 'firstName',
            type: 'textbox',
            ui: {
                label: 'First Name',
            }
        },
        {
            name: 'lastName',
            type: 'textbox',
            actionKeyNames: ["onlyLabel"],
            modelName: 'label',
            ui: {
                label: 'Last Name',
            }
        },
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['firstName', 'lastName'];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxFormBuilder) { }

    ngOnInit() {
        this.dynamicFormConfiguration = {
            fieldConfigModels: [{
                modelName: 'label',
                model: LabelModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData, this.dynamicFormConfiguration);
    }
}