import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-textbox-complete',
    templateUrl: './textbox-complete.component.html'
})

export class TextboxCompleteComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [
        {
            name: "firstName",
            type: "text",
            ui: {
                label: 'First Name'
            }
        }
    ]
    
    uiBindings: string[] = ["firstName"];
    
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    
    constructor(private formBuilder: RxDynamicFormBuilder) { }
   
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}