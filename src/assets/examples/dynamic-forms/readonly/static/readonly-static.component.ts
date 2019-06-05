import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-readonly-static',
    templateUrl: './readonly-static.component.html'
})
export class ReadonlyStaticComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'firstName',
            type: 'textbox',
            ui: {
                label: 'First Name',
                readonly: true
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