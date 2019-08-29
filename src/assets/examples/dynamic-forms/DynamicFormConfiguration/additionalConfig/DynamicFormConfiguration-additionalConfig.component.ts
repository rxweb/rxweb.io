import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-DynamicFormBuilderConfiguration-additionalConfig',
    templateUrl: './DynamicFormConfiguration-additionalConfig.component.html'
})

export class DynamicformconfigurationAdditionalconfigComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [
      {
            name: "firstName",
             type: "text",
             ui: {
                label: 'FirstName',                      
            }        
    },
    {
       name: "lastName",
             type: "text",
             ui: {
                label: 'LastName',                      
            }       
    }]
    
    uiBindings: string[] = ["registerHeading","paragraphHeading","firstName","lastName","submitButton"];
    additionalConfig=[{
      "name":"registerHeading",
      "type":"h1",
      "ui":{
        "text":"Registration Form"
      }
    },
    {
      "name":"paragraphHeading",
      "type":"p",
      "ui":{
        "text":"Register yourself to get our services"
      }
    },
       {
      "name":"submitButton",
      "type":"button",
      "ui":{
        "text":"Submit",
        "class":["btn","btn-primary"]
      }
    }]
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    
    dynamicFormConfiguration:DynamicFormConfiguration

    constructor(private formBuilder: RxDynamicFormBuilder) { }
    
    ngOnInit()
    {
        this.dynamicFormConfiguration = {additionalConfig:this.additionalConfig}
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
    }
}