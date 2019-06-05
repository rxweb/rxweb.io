import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';
import { PlaceholderModel } from './placeholder.model';

@Component({
    selector: 'app-placeholder-conditional',
    templateUrl: './placeholder-conditional.component.html'
})
export class PlaceholderConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'firstName',
            type: 'textbox',
            ui: {
                label: 'First Name',
                placeholder: 'First Name'
            }
        },
        {
            name: 'lastName',
            type: 'textbox',
            actionKeyNames: ["onlyPlaceholder"],
            modelName: 'placeholder',
            ui: {
                label: 'Last Name',
                placeholder: 'Last Name'
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
                modelName: 'placeholder',
                model: PlaceholderModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}