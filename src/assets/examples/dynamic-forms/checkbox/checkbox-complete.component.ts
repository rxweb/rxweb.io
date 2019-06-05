import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-complete-checkbox',
    templateUrl: './checkbox-complete.component.html'
})

export class CheckBoxCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
            name: "hobbies",
             type: "checkbox",
             source: [{ hobbyId: 1, hobbyName: "Reading"}, { hobbyId: 2, hobbyName: "Singing" },{ hobbyId: 3, hobbyName: "Chess" }],
               textPropName: 'hobbyName',
             valuePropName: 'hobbyId', 
             ui: {
                label: 'Hobbies',                      
            }
        
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["hobbies"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}