import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-prependLeftTextbox-complete',
    templateUrl: './prependLeftTextbox-complete.component.html'
})

export class PrependlefttextboxCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [ {
        name: "email", type:"prepend-left-textbox",
         ui: {
             prependText:{"left":'@'},
            label: 'Email',
            placeholder: 'email'
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