import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-checkbox-single',
    templateUrl: './checkbox-single.component.html'
})

export class CheckboxSingleComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [
        {
            name: "department",
            type: "checkbox",
            source: [{ value: 1, text: "Dotnet" },{ value: 2, text: "PHP" }],
            ui: {
                label: 'Department'
            }
        }
    ]
    
    uiBindings: string[] = ["department"];
    
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}