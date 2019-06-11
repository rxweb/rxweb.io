import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-complete-password',
    templateUrl: './dynamicpassword-complete.component.html'
})

export class DynamicPasswordCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [ {
        name: "password", type: "password",
         ui: {
            label: 'Password'          
        }
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["password"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}