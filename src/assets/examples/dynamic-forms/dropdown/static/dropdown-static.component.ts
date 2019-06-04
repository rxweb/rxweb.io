import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-dropdown-static',
    templateUrl: './dropdown-static.component.html'
})


export class DropDownStaticComponent implements OnInit {
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
    }]
    viewMode:string = "bootstrap-basic";
    uiBindings:string[] = ["country"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}