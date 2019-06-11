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
            name: 'editForm',
            type: 'checkbox',
            textPropName: 'value',
            valuePropName: 'key',
            source: [{key: 1,value:'Want to Edit your Form'}],
            ui: {
                label: 'Edit Form'
            }
        },
        {
            name: 'birthDate',
            type: 'date',
            actionKeyNames: ["onlyReadonly"],
            modelName: 'readonly',
            ui: {
                label: 'Birth Date'
            }
        },
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['editForm','birthDate'];
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