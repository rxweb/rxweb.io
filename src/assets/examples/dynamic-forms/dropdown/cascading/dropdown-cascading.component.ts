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
        source: [{ countryId: 1, countryName: "India" },{countryId:2,countryName:"Australia"}],
        textPropName: 'countryName',
        valuePropName: 'countryId', 
        ui: {
            label: 'Country',
            placeholder: 'Select',
                        
        }
    },
    {
        name: "state",
         type: "select",
         source: [{ stateId: 1, stateName: "Gujarat", countryId: 1 }, { stateId: 2, stateName: "Delhi", countryId: 1 },{ stateId: 3, stateName: "Melbourne", countryId: 2 }],
         textPropName: 'stateName',
         valuePropName: 'stateId', 
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