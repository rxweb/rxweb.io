import { Component, OnInit } from '@angular/core';
import { RxFormGroup,RxFormBuilder ,FormGroupExtension,ResetFormType} from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-reset-controlsAndFormgroupsOnly-validator',
    templateUrl: './reset-controls-and-form-groups-only.component.html'
})
export class ResetcontrolsAndFormGroupsOnlyValidatorComponent implements OnInit {
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
        this.userFormGroup.resetForm({resetType:ResetFormType.ControlsAndFormGroupsOnly});
       
      }
}
