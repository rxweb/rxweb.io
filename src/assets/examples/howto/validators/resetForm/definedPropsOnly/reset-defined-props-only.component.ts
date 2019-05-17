import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-reset-definedProps-validator',
    templateUrl: './reset-defined-props-only.component.html'
})
export class ResetDefinedPropsOnlyValidatorComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder)
	{ }

    ngOnInit() {              
   this.userFormGroup = <RxFormGroup>this.formBuilder.group({
     firstName:['']
   })
    }
   
     resetForm(){
        this.userFormGroup.resetForm({resetType:ResetFormType.DefinedPropsOnly,value:{ firstName: 'John' }});
       
      }
}
