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
            name: 'loginThrough',
            type: 'select',
            textPropName: 'value',
            valuePropName: 'key',
            source: [{key: 1,value:'Email Address'},{key: 2,value:'Mobile Number'}],
            ui: {
                label: 'Login Using',
                placeholder: 'Login Using'
            }
        },
        {
            name: 'loginCriteria',
            type: 'textbox',
            actionKeyNames: ["onlyPlaceholder"],
            modelName: 'placeholder',
            ui: {
                placeholder: 'Email Address'
            }
        },
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['loginThrough', 'loginCriteria'];
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