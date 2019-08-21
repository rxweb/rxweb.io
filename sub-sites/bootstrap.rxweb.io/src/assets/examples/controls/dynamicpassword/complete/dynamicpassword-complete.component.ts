import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamicpassword-complete',
    templateUrl: './dynamicpassword-complete.component.html'
})

export class DynamicpasswordCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "password",
        type: "password",
        ui: {
            label: 'Password'
        }
    }]
    uiBindings: string[] = ["password"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    ngOnInit() {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}