import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamicfile-complete',
    templateUrl: './dynamicfile-complete.component.html'
})

export class DynamicfileCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "profilePhoto",
        type: "file",
        ui: {
            label: 'Profile Photo'
        }
    }]
    uiBindings: string[] = ["profilePhoto"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}