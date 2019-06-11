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
            source: [{ value: 1, key: "India" }],
            ui: {
                label: 'Country',
                placeholder: 'Select',
                            
            }
    }]
    viewMode:string = "bootstrap-basic";
    uiBindings:string[] = ["country"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}