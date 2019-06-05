import { Component,OnInit } from "@angular/core";
import { action,DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder, FormControlConfig } from "@rxweb/reactive-form-validators";

// @action('source',[
//     {
//         keyName:'asyncSource',
//         actions : {
//             filter:function(){
//                 let promise = new Promise<any[]>((resolve, reject) => {
//                     resolve(this.config.source.filter(t => t.countryId == this.dynamicModel.countryId.value));
//                 });
//                 return promise
//             }
//         }
//     },
//     {
//         keyName:'nonAsyncSource',
//         actions: {
//             filter:function(){
//                 if (this.controlsConfig && this.controlsConfig.country.value)
//                 return this.config.source.filter(t => t.countryId == this.controlsConfig.country.value);
//             else
//                 return [];
//             }
//         }
//     }
// ])
// export class SourceModel extends FormControlConfig{
    
// }

@Component({
    selector: 'app-dropdown-cascading',
    templateUrl: './dropdown-cascading.component.html'
})

export class DropDownCascadingComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{        
        name: "country",
        type: "select",
        source: [{ countryId: 1, countryName: "India" }],
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
      this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}