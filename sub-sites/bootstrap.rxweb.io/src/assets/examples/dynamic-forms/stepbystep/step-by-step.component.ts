import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dynamic-complete',
    templateUrl: './step-by-step.component.html'
})

export class StepByStepComponent implements OnInit {
    serverData = [{
        name:"firstName",
        type:"text"
    }]

    uiBindings:string[] = ["firstName"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }
      ngOnInit()
     {
      this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData,{});
      }
}