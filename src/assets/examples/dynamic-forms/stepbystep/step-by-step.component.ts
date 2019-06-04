import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-dynamic-complete',
    templateUrl: './step-by-step.component.html'
})

export class StepByStepComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
            name:"firstName",
            type:"textbox"
        }]
         viewMode:string = "bootstrap-basic";
        uiBindings:string[] = ["firstName"];
        dynamicFormBuildConfig: DynamicFormBuildConfig;
        dynamicFormConfiguration: DynamicFormConfiguration;
        constructor(private formBuilder: RxFormBuilder) { }
          ngOnInit()
         {
          this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
          }
}