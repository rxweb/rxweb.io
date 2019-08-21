import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-radio-static',
    templateUrl: './radio-static.component.html'
})

export class RadioStaticComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "gender",
         type: "radio",
         source: [{ value: 1, text: "Male"},{ value: 2, text: "Female" }],
         ui: {
            label: 'Gender'                            
        }
    }]
    uiBindings: string[] = ["gender"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}