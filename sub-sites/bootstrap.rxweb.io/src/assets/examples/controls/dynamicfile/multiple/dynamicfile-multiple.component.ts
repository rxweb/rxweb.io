import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamicfile-multiple',
    templateUrl: './dynamicfile-multiple.component.html'
})


export class DynamicfileMultipleComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "idCardImage",
        type: "file",
        additionalConfig: {
            prop: {
              multiple: true
            }
          },
        ui: {
            label: 'Id Card Photos',
        }
    }]
    uiBindings: string[] = ["idCardImage"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}