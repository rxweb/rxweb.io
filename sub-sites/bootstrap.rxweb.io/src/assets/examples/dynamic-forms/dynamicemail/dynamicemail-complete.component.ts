import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-email-complete',
    templateUrl: './dynamicemail-complete.component.html'
})

export class DynamicEmailCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
            name: "email",
             type: "email",
             ui: {
                label: 'Email',                      
            }
        
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["email"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}