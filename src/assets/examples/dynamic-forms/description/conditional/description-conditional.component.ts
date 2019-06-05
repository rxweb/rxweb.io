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
            name: 'firstName',
            type: 'textbox',
            ui: {
                label: 'First Name',
            }
        },
        {
            name: 'company',
            type: 'textbox',
            actionKeyNames: ["onlyDescription"],
            modelName: 'description',
            ui: {
                label: 'Company Name',
                description: 'Enter the name of company in which you are currently working'
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
                modelName: 'description',
                model: DescriptionModel
            }]
        }
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}