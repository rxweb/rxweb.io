import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { QuantityModel } from "./quantity.model";


@Component({
  selector: 'app-preValueHook-complete',
  templateUrl: './preValueHook-complete.component.html'
})

export class PreValueHookCompleteComponent implements OnInit {
  serverData = [
    {
      name: 'quantity',
      type: 'text',
      ui: {
        label: 'Enter Quantity',
        placeholder:"You can enter only digits"
      },
      modelName: 'quantityModel'
    }
  ]
  uiBindings: string[] = ["quantity"];
  dynamicFormBuildConfig: DynamicFormBuildConfig;
  constructor(private formBuilder: RxDynamicFormBuilder) { }
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {
      controlConfigModels: [
        {modelName: "quantityModel", model: QuantityModel}]
    });
  }
}