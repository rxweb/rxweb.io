import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-focus-static',
    templateUrl: './focus-static.component.html'
})
export class FocusStaticComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
        {
            name: 'firstName',
            type: 'textbox',
            ui: {
                label: 'First Name',
                focus: true
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