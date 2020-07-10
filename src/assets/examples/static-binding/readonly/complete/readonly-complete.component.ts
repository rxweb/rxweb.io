import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-readonly-complete',
    templateUrl: './readonly-complete.component.html'
})

export class ReadonlyCompleteComponent implements OnInit {
    serverData = [{
            name:"firstName",
            type:"text",
            "ui":{
              "readonly": true
            }
        }]
    
        uiBindings:string[] = ["firstName"];
        dynamicFormBuildConfig: DynamicFormBuildConfig;

        constructor(private formBuilder: RxDynamicFormBuilder) { }
          ngOnInit()
         {
          this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData,{});
          }
}