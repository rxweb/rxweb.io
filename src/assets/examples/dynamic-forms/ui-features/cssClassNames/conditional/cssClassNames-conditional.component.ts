import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, action, FormControlConfig } from "@rxweb/reactive-form-validators";

@action('cssClassNames', [
    {
        keyName: 'onlyCssClassNames',
        actions: {
            cssClassNames: function () {
                if (this.controlsConfig.firstName.value == 'John') {
                    return this.controlsConfig.lastName.cssClassNames = ['col-6','font-italic']
                }
                return null
            }
        }
    }
])
export class CssClassNamesModel extends FormControlConfig { }

@Component({
    selector: 'app-cssClassNames-conditional',
    templateUrl: './cssClassNames-conditional.component.html'
})
export class CssClassNamesConditionalComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'firstName',
            type: 'textbox',
            ui: {
                cssClassNames: ['col-6','font-italic'],
                label: 'First Name'
            }
        },
        {
            name: 'lastName',
            type: 'textbox',
            ui: {
                label: 'Last Name'
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