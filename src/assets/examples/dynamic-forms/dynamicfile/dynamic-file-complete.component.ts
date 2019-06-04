import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-complete-file',
    templateUrl: './dynamic-file-complete.component.html'
})

export class DynamicFileCompleteComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [ {
        name: "profilePhoto", type: "file",
         ui: {
            label: 'Profile Photo'          
        }
    }]
    viewMode: string = "bootstrap-basic";
    uiBindings: string[] = ["profilePhoto"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}