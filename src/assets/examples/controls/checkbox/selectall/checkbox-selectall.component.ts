import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, DYNAMIC_ELEMENT_DESIGN_TREE, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { SelectAllLogic } from "./source"

@Component({
  selector: 'app-checkbox-selectall',
  templateUrl: './checkbox-selectall.component.html'
})

export class CheckboxSelectallComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [{
    name: "hobbies",
    type: "checkbox",
    multiselect: true,
    source: [{ value: 1, text: "Singing", checked: false }, { value: 2, text: "Dancing", checked: false }, { value: 3, text: "Travelling",checked: false }],
    ui: {
      label: 'Hobbies'
    }
  }]

  additionalConfig = [
    {
      name: 'select',
      type: 'button',
      modelName: 'eventModel',
      events: {
        click: 'selectAllCheckbox'
      },
      skipDefaultView: true,
      ui: {
        text: 'Select All',
        class: ['btn-secondary', 'btn']
      }
    }
  ]


  uiBindings: string[] = ["select","hobbies"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  dynamicFormConfiguration: DynamicFormConfiguration;

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit() {
    debugger
    this.dynamicFormConfiguration = {
      additionalConfig: this.additionalConfig,
      controlConfigModels: [{ modelName: 'eventModel', model: SelectAllLogic }],
    }
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
  }
}