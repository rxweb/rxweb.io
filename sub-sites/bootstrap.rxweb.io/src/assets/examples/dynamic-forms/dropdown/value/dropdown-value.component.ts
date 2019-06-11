import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-dropdown-value',
    templateUrl: './dropdown-value.component.html'
})


export class DropDownValueComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{        
            name: "department",
            type: "select",
            source: [{ departmentId: 1, departmentName: "Dotnet" },{ departmentId: 2, departmentName: "php" },{ departmentId: 2, departmentName: "Mobile" }],
            textPropName: 'departmentName',
            valuePropName: 'departmentId', 
            ui: {
                label: 'Department',
                placeholder: 'Select',
                            
            }
    }]
    viewMode:string = "bootstrap-basic";
    uiBindings:string[] = ["department"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}