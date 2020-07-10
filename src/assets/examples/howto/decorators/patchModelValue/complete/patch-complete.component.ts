import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,RxFormGroup } from '@rxweb/reactive-form-validators';

import { User,Address,Hobby } from './user.model';

@Component({
    selector: 'app-patch-complete',
    templateUrl: './patch-complete.component.html'
})
export class PatchCompleteComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
         let hobby = new Hobby();
         user.address = new Address();
         user.hobbies = new Array<Hobby>();
         user.hobbies.push(hobby);
        this.userInfoFormGroup = <RxFormGroup>this.formBuilder.formGroup(user); 
    }
     getFormArray(){
      let formarray = this.userInfoFormGroup.controls.hobbies as FormArray;
      return formarray.controls;
    }
    patchvalue()
    {
          this.userInfoFormGroup.patchModelValue(
            {firstName:'John',
               address: { areaName: "Victoria" },
                hobbies: [{ name: "Travelling" }] });
    }
}
