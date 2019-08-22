import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, AbstractControlConfig, dynamicComponent, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-nestedformgroup-complete',
    templateUrl: './nestedformgroup-complete.component.html'
  })
  
  export class NestedformgroupCompleteComponent implements OnInit {
  
    serverData: Array<{ [key: string]: any }> = [
      {
        name: 'address.number',
        type: 'text',
        ui: {
          label: 'House No.'
        }
      },
      {
        name: 'address.colony',
        type: 'text',
        ui: {
          label: 'Colony Name'
        }
      }
    ]
  
    uiBindings: string[] = ["addressSection"];
    dynamicFormConfiguration: DynamicFormConfiguration
    dynamicFormBuildConfig: DynamicFormBuildConfig;
  
    constructor(private formBuilder: RxDynamicFormBuilder) { }
  
    ngOnInit() {
      this.dynamicFormConfiguration = {
        additionalConfig: [
          {
            type: 'card',
            name: 'addressSection',
            childrens: [
              {
                type: 'card-header',
                ui:
                {
                  text: 'Address'
                }
              },
              {
                type: 'card-body',
                childrens: ['address.number','address.colony']
              }
            ],
            skipDefaultView: true
          }]
      }
      this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
    }
  }