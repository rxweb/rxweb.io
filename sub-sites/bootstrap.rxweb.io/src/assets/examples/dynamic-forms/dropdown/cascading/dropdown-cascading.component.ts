import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig } from "@rxweb/reactive-form-validators";
import { SourceModel } from "./source";



@Component({
    selector: 'app-dropdown-cascading',
    templateUrl: './dropdown-cascading.component.html'
})

export class DropDownCascadingComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{        
        name: "country",
        type: "select",
        source: [{ value: 1, key: "India" },{value:2,key:"Australia"}],
        ui: {
            label: 'Country',
            placeholder: 'Select',
                        
        }
    },
    {
        name: "state",
         type: "select",
         source: [{ value: 1, key: "Gujarat", countryId: 1 }, { value: 2, key: "Delhi", countryId: 1 },{ value: 3, key: "Melbourne", countryId: 2 }],
         actionKeyNames: ["nonAsyncSource"],
         modelName:'source',
         ui: {
            label: 'State',
            placeholder: 'Select'                            
        }
    }]
    viewMode:string = "bootstrap-basic";
    uiBindings:string[] = ["country","state"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormConfiguration = {
            fieldConfigModels:[{
                modelName:'source',
                model:SourceModel
            }]
        }
      this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}