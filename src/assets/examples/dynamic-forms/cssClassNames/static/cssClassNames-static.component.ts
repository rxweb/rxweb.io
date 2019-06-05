import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-cssClassNames-static',
    templateUrl: './cssClassNames-static.component.html'
})
export class CssClassNamesStaticComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'firstName',
            type: 'textbox',
            ui: {
                cssClassNames: ['col-6','font-italic'],
                label: 'First Name'
            }
        }
    ]

    viewMode: string = 'bootstrap-basic';
    uiBindings: string[] = ['firstName'];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxFormBuilder) {}

    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}