import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { SameAsAddressModel } from "./same-as-address.model";


@Component({
  selector: 'app-DynamicFormBuilderConfiguration-controlConfig',
  templateUrl: './DynamicFormConfiguration-controlConfig.component.html'
})

export class DynamicformconfigurationControlconfigComponent implements OnInit {

  serverData = [
    {
        type:'textarea',
        name:'permanentAddress',
        ui:{label:'Permanent Address',placeholder:'Enter Your Permanent Address'}
      },
    {
        type:'checkbox',
        name:'sameAsPermanent',
        modelName:'sameAsAddress',
        source:[{value:1,text:'Same As Permanent'}]
      },
      {
        type:'textarea',
        name:'correspondenceAddress',
        ui:{label:'Correspondence Address',placeholder:'Enter Your Correspondence Address'}
      }
  ]

  uiBindings: string[] = ["permanentAddress","sameAsPermanent", "correspondenceAddress"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  dynamicFormConfiguration: DynamicFormConfiguration;

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    this.dynamicFormConfiguration = {
      controlConfigModels: [{modelName:"sameAsAddress",model:SameAsAddressModel}],
    }
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
  }

}