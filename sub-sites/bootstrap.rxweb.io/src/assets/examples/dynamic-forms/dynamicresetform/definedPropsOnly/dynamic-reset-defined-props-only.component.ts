import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import {ResetFormType } from '@rxweb/reactive-form-validators'

@Component({
    selector: 'app-dynamicresetform-definedPropsOnly',
    templateUrl: './dynamic-reset-defined-props-only.component.html'
})

export class DynamicResetDefinedPropsOnlyComponent  implements OnInit {
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
            this.dynamicFormBuildConfig.formGroup.resetForm({resetType:ResetFormType.DefinedPropsOnly,value:{ firstName: 'John' }})
            }
}