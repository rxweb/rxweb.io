import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-dropdown-value',
    templateUrl: './dropdown-value.component.html'
})

export class DropdownValueComponent implements OnInit {

    serverData: Array<{ [key: string]: any }> = [{        
            name: "department",
            type: "select",
            value:1,
            source: [{ departmentId: 1, departmentName: "Dotnet" },{ departmentId: 2, departmentName: "php" },{ departmentId: 2, departmentName: "Android" }],
            textPropName: 'departmentId',
            valuePropName: 'departmentName',
            ui: {
                label: 'Department',
                placeholder: 'Select',
                            
            }
    }]

    uiBindings:string[] = ["department"];

    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder) { }

    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData, {});
    }
}