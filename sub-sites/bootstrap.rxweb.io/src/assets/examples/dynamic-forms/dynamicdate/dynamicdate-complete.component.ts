import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-date-complete',
    templateUrl: './dynamicdate-complete.component.html'
})

export class DynamicDateCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
            name: "dateOfBirth",
             type: "date",
             ui: {
                label: 'Date Of Birth',                      
            }
        
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["dateOfBirth"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}