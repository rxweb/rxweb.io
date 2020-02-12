import { Component, Input } from '@angular/core';
import { DynamicFormBuildConfig, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';

@Component({
    selector: 'app-dynamic-builder',
    templateUrl: './dynamic-form-builder.component.html',

})
export class FormBuilderDynamicComponent {
    
    @Input() serverData:any[];
    @Input() uiBindings: string[] = [];
    dynamicFormBuildConfig: DynamicFormBuildConfig;

    constructor(private formBuilder: RxDynamicFormBuilder){ }

    ngOnInit() {
 
        this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.serverData);            
    }

    
}
