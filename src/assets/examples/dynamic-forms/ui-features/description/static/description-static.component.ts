import { Component, OnInit } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-description-static',
    templateUrl: './description-static.component.html'
})
export class DescriptionStaticComponent implements OnInit {

    serverData: Array<{ [key: string]: any}> = [
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
    uiBindings: string[] = ['firstName'];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;

    constructor(private formBuilder: RxFormBuilder) {}

    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}