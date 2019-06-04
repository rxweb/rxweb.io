import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-textbox-complete',
    templateUrl: './textbox-complete.component.html'
})


export class TextBoxCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name:"name",
        type:"textbox"
    }]
    viewMode:string = "bootstrap-basic";
    uiBindings:string[] = ["name"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
    this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}