import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { SourceAsyncConditionalModel } from "./source";

@Component({
  selector: 'app-dropdown-async',
  templateUrl: './dropdown-async.component.html'
})

export class DropdownAsyncComponent implements OnInit {

  serverData: Array<{ [key: string]: any }> = [
    {
      name: "country",
      type: "select",
      source: [{ text: "India", value: 1 }, { text: "US", value: 2 }, { text: "Canada", value: 3 }],
      ui: {
        label: 'Country',
        placeholder: 'select'
      }
    },
    {
      name: "state",
      modelName: 'sourceAsync',
      type: "select",
      ui: {
        label: 'State',
        placeholder: 'select'
      }
    }
  ]
  
  uiBindings: string[] = ["country", "state"];
  
  dynamicFormBuildConfig: DynamicFormBuildConfig;
  
  dynamicFormConfiguration: DynamicFormConfiguration;
  
  constructor(private formBuilder: RxDynamicFormBuilder) { }
  
  ngOnInit() {
  
    this.dynamicFormConfiguration = {
      controlConfigModels: [{ modelName: 'sourceAsync', model: SourceAsyncConditionalModel }],
    }
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
  
  }
}