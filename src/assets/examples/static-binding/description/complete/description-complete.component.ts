import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-description-complete-validator',
    templateUrl: './description-complete.component.html'
})

export class DescriptionCompleteComponent implements OnInit {
    serverData = [{
            "name":"firstName",
            "type":"text",
            "ui":{
              "description":"Please Enter FirstName"
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