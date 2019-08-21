import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dropdown-multiselect',
    templateUrl: './dropdown-multiselect.component.html'
})


export class DropdownMultiselectComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "hobbies",
        type: "select",
        source: [{ value: 1, text: "Singing" },{ value: 2, text: "Dancing" }, { value: 3, text: "Travelling" }, { value: 4, text: "Cooking" }],
        multiselect: true,
        ui: {
            label: 'Hobbies',
        }
    }]
    uiBindings: string[] = ["hobbies"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}