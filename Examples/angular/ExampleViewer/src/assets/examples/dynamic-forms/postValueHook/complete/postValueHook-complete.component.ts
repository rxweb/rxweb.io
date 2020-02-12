import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { UserModel } from "./user.model";



@Component({
  selector: 'app-postValueHook-complete',
  templateUrl: './postValueHook-complete.component.html'
})

export class PostValueHookCompleteComponent implements OnInit {
  serverData = [
    {
      name: 'quantity',
      type: 'text',
      ui: {
        label: 'Enter Quantity'
      },
      modelName: 'quantityModel'
    },
    {
      name: 'price',
      type: 'text',
      ui: {
        label:"Enter Price"
      },
      modelName: 'userModel'
    },
    {
      name: 'totalAmount',
      type: 'text',
      ui: {
        label: "Total amount"
      }
    }
  ]
  uiBindings: string[] = ["quantity", "price", "totalAmount"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;
  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
      controlConfigModels: [
        { modelName: "userModel", model: UserModel },
       ]
    });
  }
}