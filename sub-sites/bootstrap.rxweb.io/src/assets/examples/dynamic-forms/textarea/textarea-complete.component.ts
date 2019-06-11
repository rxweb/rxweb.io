import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-complete-textarea',
    templateUrl: './textarea-complete.component.html'
})

export class TextareaCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [ {
        name: "address", type: "textarea",
         ui: {
            label: 'Address'          
        }
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["address"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}