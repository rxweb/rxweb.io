import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-reset-with-validator',
    templateUrl: './reset-with.component.html'
})
export class ResetWithValidatorComponent implements OnInit {
    userFormGroup: RxFormGroup
    
	constructor(
        private formBuilder: RxFormBuilder)
	{ }

    ngOnInit() {
              
   this.userFormGroup = <RxFormGroup>this.formBuilder.group({
     firstName:[''],
          address:{
            areaName:''
          },
        });
    }
   
     resetForm(){
        this.userFormGroup.resetForm({ with: ["firstName","address.areaName"] });
       
      }
}
