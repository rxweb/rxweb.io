import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
    selector: 'app-source-complete',
    templateUrl: './source-complete.component.html'
})

export class SourceCompleteComponent implements OnInit {
    serverData = [ {
      type: 'select',
      name: 'Skills',
      source: [{ text: "Angular", value: "1" }, { text: "MVC", value: "2" }, { text: "React", value: "3" }],
      ui: {
        label: 'Skills',
      }
    }]
    
        uiBindings:string[] = ["Skills"];
        dynamicFormBuildConfig: DynamicFormBuildConfig;

        constructor(private formBuilder: RxDynamicFormBuilder) { }
          ngOnInit()
         {
          this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData,{});
          }
}