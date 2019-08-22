import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamicemail-complete',
    templateUrl: './dynamicemail-complete.component.html'
})

export class DynamicemailCompleteComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [{
            name: "email",
             type: "email",
             ui: {
                label: 'Email Address',                      
            }
        
    }]
    
    uiBindings: string[] = ["email"];
    
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    
    constructor(private formBuilder: RxDynamicFormBuilder) { }
    
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}