import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-color-complete',
    templateUrl: './color-complete.component.html'
})

export class ColorCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [{
            name: "colorPicker",
             type: "color",
             ui: {
                label: 'Color Picker',                      
            }
        
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["colorPicker"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}