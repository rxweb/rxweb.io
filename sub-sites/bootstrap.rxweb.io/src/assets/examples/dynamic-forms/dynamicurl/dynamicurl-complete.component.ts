import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-complete-url',
    templateUrl: './dynamicurl-complete.component.html'
})

export class DynamicUrlCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [ {
        name: "url", type: "url",
         ui: {
            label: 'Website Url'          
        }
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["url"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}