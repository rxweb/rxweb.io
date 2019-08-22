import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, AbstractControlConfig, dynamicComponent, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { ArrayComponent } from "./array/array-complete.component";

@Component({
    selector: 'app-nestedformarray-complete',
    templateUrl: './nestedformarray-complete.component.html',
    entryComponents: [ArrayComponent]
  })
  
  export class NestedformarrayCompleteComponent implements OnInit {
  
    serverData: Array<{ [key: string]: any }> = [
      {
        name: "hobbies",
        type: "array",
        controlConfigs: {
          name: {
            type: 'text',
            actionKeyNames: [],
            validators: {
              required: true
            },
            ui: {
              label: 'Name',
              placeholder: 'Enter your User Name',
              description: 'Enter the details of your userName'
            }
          },
          lastName: {
            type: 'text',
            actionKeyNames: [],
            validators: {
              required: true
            },
            ui: {
              label: 'lastname',
              placeholder: 'Enter your User Name',
              description: 'Enter the details of your userName'
            }
          }
        },
        minimumRepeatCount: 5,
        rows: [{
          fields: [
            {
              name: 'name',
              value: 'Srishti'
            }, {
              name: 'lastName',
              value: 'Khandelwal'
            }
          ]
  
        }]
      }
    ]
  
    additionalConfig: any[] = [
      // {
      //    type: 'card',
      //    name: 'addressSection',
      //    childrens: [{ type: 'card-header', ui: { text: 'Address' } }, { type: 'card-body', childrens: ['address.name'] }],
      //    skipDefaultView: true
      // },
      {
        type: "#addressSection",
        name: 'addressSection',
        ui: { text: 'Address' },
        childrens: ["address.name"],
        skipDefaultView: true,
      },
      {
        type: '#hobbiesSection',
        name: 'hobbiesSection',
        controlConfigName: "hobbies",
        ui: { text: 'Hobbies' },
        childrens: ["name", "lastName"],
        skipDefaultView: true,
      }
    ]
  
    uiBindings: string[] = ["hobbiesSection"];
  
    dynamicFormBuildConfig: DynamicFormBuildConfig;
  
    constructor(private formBuilder: RxDynamicFormBuilder) { }
  
    ngOnInit() {
      this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
        additionalConfig: this.additionalConfig
      });
    }
  }