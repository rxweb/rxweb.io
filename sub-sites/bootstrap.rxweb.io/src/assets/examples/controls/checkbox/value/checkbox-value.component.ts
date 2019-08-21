import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-checkbox-value',
    templateUrl: './checkbox-value.component.html'
})

export class CheckboxValueComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "hobbies",
         type: "checkbox",
         multiselect:true,
         source: [{ hobbyId: 1, hobbyName: "Singing"},{ hobbyId: 2, hobbyName: "Dancing" },{ hobbyId: 3, hobbyName: "Travelling" }],
         textPropName: 'hobbyId',
         valuePropName: 'hobbyName',
         ui: {
            label: 'Hobbies'
        }
    }]
    uiBindings: string[] = ["hobbies"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}