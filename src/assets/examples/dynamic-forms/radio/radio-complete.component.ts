import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-complete-radio',
    templateUrl: './radio-complete.component.html'
})

export class RadioCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
        name: "gender",
         type: "radio",
         source: [{ genderId: 1, genderName: "Male"},{ genderId: 2, genderName: "Female" }],
         textPropName: 'genderName',
         valuePropName: 'genderId', 
         ui: {
            label: 'Gender',
            formGrid: {
                column: {md:12},
                label: { sm:2 },
                control: { sm:10  }
            }                            
        }
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["gender"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}