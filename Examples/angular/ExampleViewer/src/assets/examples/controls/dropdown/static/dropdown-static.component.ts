import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dropdown-static',
    templateUrl: './dropdown-static.component.html'
})


export class DropdownStaticComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [{
        name: "gender",
        type: "select",
        source: [{ value: 1, text: "Male" },{ value: 2, text: "Female" }],
        ui: {
            label: 'Gender',
            placeholder: 'Select',
        }
    }]
    
    uiBindings: string[] = ["gender"];
    
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}