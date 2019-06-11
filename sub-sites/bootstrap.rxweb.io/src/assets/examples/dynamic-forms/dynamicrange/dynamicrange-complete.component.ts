import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-complete-range',
    templateUrl: './dynamicrange-complete.component.html'
})

export class DynamicRangeCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [ {
        name: "price", type: "range",
         ui: {
            label: 'Price'          
        }
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["price"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}