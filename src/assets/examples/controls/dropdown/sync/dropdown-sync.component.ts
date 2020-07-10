import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { SourceSyncConditionalModel } from './source';

@Component({
  selector: 'app-dropdown-sync',
  templateUrl: './dropdown-sync.component.html'
})

export class DropdownSyncComponent implements OnInit {

  serverData = [
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
      modelName: 'sourceSync', 
      type: "select", 
      filter: [{ text: "Gujarat", value: 1, countryId: 1 }, { text: "Delhi", value: 2, countryId: 1 }, { text: "NY", value: 3, countryId: 2 }], 
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
      controlConfigModels: [{ modelName: 'sourceSync', model: SourceSyncConditionalModel }],
    }
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
  }

}