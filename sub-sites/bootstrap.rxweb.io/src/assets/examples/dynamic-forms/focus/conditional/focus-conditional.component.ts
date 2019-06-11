import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';
import { FocusModel } from './focus.model';

@Component({
    selector: 'app-focus-conditional',
    templateUrl: './focus-conditional.component.html'
})
export class FocusConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'firstName',
            type: 'textbox',
            value: 'John',
            ui: {
                label: 'First Name'
            }
        },
        {
            name: 'lastName',
            type: 'textbox',
            actionKeyNames: ["onlyfocus"],
            modelName: 'focus',
            ui: {
                label: 'Last Name',
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
                modelName: 'focus',
                model: FocusModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}