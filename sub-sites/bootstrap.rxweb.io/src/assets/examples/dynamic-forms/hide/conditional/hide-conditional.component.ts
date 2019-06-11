import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';
import { HideModel } from './hide.model';


@Component({
    selector: 'app-hide-conditional',
    templateUrl: './hide-conditional.component.html'
})
export class HideConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'age',
            type: "radio",
            textPropName: 'ageValue',
            valuePropName: 'ageId',
            source: [{ageId: 1,ageValue:'Greater than or Equal to 18'},{ageId: 2,ageValue:'Less than 18'}],
            ui: {
                label: 'Age'
            }
        },
        {
            name: 'votersAge',
            type: 'textbox',
            actionKeyNames: ["onlyHide"],
            modelName: 'hide',
            ui: {
                label: 'Voters Age',
            }
        },
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ["age","votersAge"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxFormBuilder) {}

    ngOnInit() {
        this.dynamicFormConfiguration = {
            fieldConfigModels: [{
                modelName: 'hide',
                model: HideModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}