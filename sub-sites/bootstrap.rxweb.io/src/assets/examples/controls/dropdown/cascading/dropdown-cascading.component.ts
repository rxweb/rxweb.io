import { Component, OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";
import { SourceAsyncConditionalModel } from "./source";

@Component({
    selector: 'app-dropdown-cascading',
    templateUrl: './dropdown-cascading.component.html'
})

export class DropdownCascadingComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [
        {
          name: "country",
          type: "select",
          source: [{ text: "India", value: 1 }, { text: "US", value: 2 }],
          ui: {
            label: 'Country',
            placeholder: 'Select',
          }
        },
        {
          name: "state",
          modelName: 'sourceSync',
          type: "select",
          filter: [
            { text: "Gujarat", value: 1, countryId: 1 },
            { text: "Delhi", value: 2, countryId: 1 },
            { text: "NY", value: 3, countryId: 2 }
          ],
          ui: {
            label: 'State',
            placeholder: 'Select'
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