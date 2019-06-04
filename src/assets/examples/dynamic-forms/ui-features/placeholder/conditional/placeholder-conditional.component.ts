import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig, action } from '@rxweb/reactive-form-validators';

@action('placeholder', [
    {
        keyName: 'onlyPlaceholder',
        actions: {
            placeholder: function () {
                if (this.controlsConfig.firstName.value != '' && this.controlsConfig.firstName.value != undefined) {
                    return this.controlsConfig.lastName.placeholder = "Hello " + this.controlsConfig.firstName.value + ", Enter your last name"
                }
                return "Last Name"
            }
        }
    }
])
export class PlaceholderModel extends FormControlConfig { }

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
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}