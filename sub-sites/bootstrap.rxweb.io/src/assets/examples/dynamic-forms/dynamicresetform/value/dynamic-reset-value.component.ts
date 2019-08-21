import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import {ResetFormType } from '@rxweb/reactive-form-validators'

@Component({
    selector: 'app-dynamicresetform-value',
    templateUrl: './dynamic-reset-value.component.html'
})

export class DynamicresetvalueComponent implements OnInit {
    serverData = [{
            name:"firstName",
            type:"text",
            ui:{
              "class":["form-control-lg"]
            }
        }]
    
        uiBindings:string[] = ["firstName"];
        dynamicFormBuildConfig: DynamicFormBuildConfig;

        constructor(private formBuilder: RxDynamicFormBuilder) { }
          ngOnInit()
         {
          this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData,{});
        
          }
          resetForm(){          
            this.dynamicFormBuildConfig.formGroup.resetForm({ value: { firstName: 'John' } });
            }
}