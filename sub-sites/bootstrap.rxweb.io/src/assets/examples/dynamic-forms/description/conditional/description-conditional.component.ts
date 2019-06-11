import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';
import { DescriptionModel } from './description.model';

@Component({
    selector: 'app-description-conditional',
    templateUrl: './description-conditional.component.html'
})
export class DescriptionConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'newsLetter',
            type: 'checkbox',
            textPropName: 'value',
            valuePropName: 'key',
            source: [{key: 1,value: 'want our daily newsletter'}],
        },
        {
            name: 'email',
            type: 'email',
            actionKeyNames: ["onlyDescription"],
            modelName: 'description',
            ui: {
                placeholder: 'email address',
                description: 'Before entering this, please select the above option for newsletter'
            }
        }
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['newsLetter','email'];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxFormBuilder) {}

    ngOnInit() {
        this.dynamicFormConfiguration = {
            fieldConfigModels: [{
                modelName: 'description',
                model: DescriptionModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}