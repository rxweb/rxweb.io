import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';

@action('description', [
    {
        keyName: 'onlyDescription',
        actions: {
            description: function () {
                if (this.controlsConfig.firstName.value != '' && this.controlsConfig.firstName.value != undefined) {
                    return this.controlsConfig.lastName.description = "Hello " + this.controlsConfig.firstName.value + ", Enter the name of company in which you are currently working"
                }
                return "Last Name"
            }
        }
    }
])
export class DescriptionModel extends FormControlConfig { }

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
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}