
import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { UserModel } from './user.model';

@Component({
    selector: 'app-conditionalvalue-conditional',
    templateUrl: './conditionalvalue-conditional.component.html'
})

export class ConditionalvalueConditionalComponent implements OnInit {
    serverData = [
        {
            name: 'firstName',
            type: 'text',
            ui: {
                label: 'Enter Your First Name'
            },
            modelName:  'userModel'
        },
        {
            name: 'bio',
            type: 'text',
            ui: {
                placeholder: "Enter bio"
            }
            
        }
    ]

    uiBindings: string[] = ["firstName","bio"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
            controlConfigModels: [{ modelName: "userModel", model: UserModel }]
        });
    }
}
