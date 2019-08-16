
import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { UserModel } from './user.model';

@Component({
    selector: 'app-conditionalreadonly-conditional',
    templateUrl: './conditionalreadonly-conditional.component.html'
})

export class ConditionalreadonlyConditionalComponent implements OnInit {
    serverData = [
        {
            name: 'mode',
            type: 'select',
    
            source:[{text:"Edit",value:1},{text:"View",value:2}]  
        },
        {
            name: 'bio',
            type: 'text',
            ui: {
                placeholder: "Enter bio"
            },
            modelName: 'userModel'
        }
    ]

    uiBindings: string[] = ["mode","bio"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
            controlConfigModels: [{ modelName: "userModel", model: UserModel }]
        });
    }
}
