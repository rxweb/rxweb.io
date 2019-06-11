import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-bootstrapadvance-complete',
    templateUrl: './bootstrap-advance.component.html'
})

export class BootstrapAdvanceComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [
        {
            name: "firstName", type: "textbox",
             ui: {
                label: 'First Name',
                placeholder: 'First Name',
                formGrid: {
                    column: {md:6},
                    label: { sm:2 },
                    control: { sm:10  }
                }
            }
        },
        {
            name: "lastName",
             type: "textbox",
             ui: {
                label: 'Last Name',
                placeholder: 'Last Name',
                formGrid: {
                    column: {md:6},
                    label: { sm:2 },
                    control: { sm:10  }
                }
            }
        },        
        {
            name: "email",
             type: "textbox",
             ui: {
                label: 'Email',
                placeholder: 'email',
                formGrid: {
                    column: {md:12},
                    label: { sm:2 },
                    control: { sm:10  }
                }
            }
        }]
   viewMode: string = "bootstrap-advance";
   uiBindings = [["firstName","lastName"],["email"]];
   dynamicFormBuildConfig: DynamicFormBuildConfig;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
     this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData);
    }
}