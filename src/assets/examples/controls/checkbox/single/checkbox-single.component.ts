import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-checkbox-single',
    templateUrl: './checkbox-single.component.html'
})

export class CheckboxSingleComponent implements OnInit {

    serverData = [
        {
            name: "agree",
            type: "checkbox",
            source: [{ value: 1, text: "Already a member" }]
        }
    ]
    
    uiBindings: string[] = ["agree"];
    
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}