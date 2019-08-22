import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import {ResetFormType } from '@rxweb/reactive-form-validators'

@Component({
    selector: 'app-dynamicresetform-controlsOnly',
    templateUrl: './dynamic-reset-form.component.html'
})

export class DynamicResetFormFormsonlyComponent implements OnInit {
    serverData = [{
            name:"firstName",
            type:"text",
            ui:{
              "label":"FirstName"
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
            this.dynamicFormBuildConfig.formGroup.resetForm({resetType:ResetFormType.ControlsOnly})
            }
}