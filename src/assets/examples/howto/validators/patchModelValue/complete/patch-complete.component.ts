import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,RxFormGroup } from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-patch-complete-validator',
    templateUrl: './patch-complete.component.html'
})
export class PatchCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
      this.userInfoFormGroup = <RxFormGroup>this.formBuilder.group({
          firstName:[''],
          address:{
            areaName:''
          },
          hobbies:[
          {
            name:''
          }]
        });
    }
     getFormArray(){
      let formarray = this.userInfoFormGroup.controls.hobbies as FormArray;
      return formarray.controls;
    }
    patchvalue()
    {
          this.userInfoFormGroup.patchModelValue( {firstName:'John',
               address: { areaName: "Victoria" },
                hobbies: [{ name: "Travelling" }] });
    }
}
