import { Component,OnInit } from "@angular/core";
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
    selector: 'app-bootstrap-horizontal',
    templateUrl: './bootstrap-horizontal.component.html'
})

export class BootstrapHorizontalComponent implements OnInit {
    serverData: Array<{ [key: string]: any }> = [

        {
            name: "firstName", type: "textbox",
            validators: {
                required: true
            },
             ui: {
                label: 'First Name',
                placeholder: 'First Name',
                formGrid: {
                    label: { sm:2 },
                    control: { sm:10  }
                }
            }
        },
        {
            name: "lastName",
             type: "textbox",
             validators: {
                required: true
            },
             ui: {
                label: 'Last Name',
                placeholder: 'Last Name',
                formGrid: {
                    label: { sm:2 },
                    control: { sm:10  }
                }
            }
        },        
        {
            name: "email",
             type: "textbox",
             validators: {
                email: true,required:true
            },
             ui: {
                label: 'Email',
                placeholder: 'email',
                formGrid: {
                    label: { sm:2 },
                    control: { sm:10  }
                }
            }
        }           
    ];
    viewMode: string = "bootstrap-horizontal";
    uiBindings: string[] = ["firstName","lastName","email"];
    dynamicFormBuildConfig: DynamicFormBuildConfig;
    dynamicFormConfiguration: DynamicFormConfiguration;
    constructor(private formBuilder: RxFormBuilder) { }
    ngOnInit()
    {
        this.dynamicFormBuildConfig = this.formBuilder.dynamicForm(this.serverData,this.dynamicFormConfiguration);
    }
}