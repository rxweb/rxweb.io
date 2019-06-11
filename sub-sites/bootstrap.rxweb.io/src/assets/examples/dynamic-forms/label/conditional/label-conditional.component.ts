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
            name: 'loginThrough',
            type: 'select',
            textPropName: 'value',
            valuePropName: 'key',
            source: [{key: 1,value:'Email Address'},{key: 2,value:'Mobile Number'}],
            ui: {
                label: 'Login Using',
            }
        },
        {
            name: 'loginCriteria',
            type: 'textbox',
            actionKeyNames: ["onlyLabel"],
            modelName: 'label',
            ui: {
                label: 'Email Address',
            }
        },
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['loginThrough', 'loginCriteria'];
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