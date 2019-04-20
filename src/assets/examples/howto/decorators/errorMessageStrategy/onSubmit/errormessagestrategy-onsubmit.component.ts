import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,RxFormGroup } from '@rxweb/reactive-form-validators';

import { User,Address,Skill } from './user.model';

@Component({
    selector: 'app-errormessagestrategy-onsubmit',
    templateUrl: './errormessagestrategy-onsubmit.component.html'
})
export class ErrormessagestrategyOnsubmitComponent implements OnInit {
    userFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        user.address = new Address();
        user.skills = new Array<Skill>();
        user.skills.push(new Skill());
        this.userFormGroup = this.formBuilder.formGroup(user) as RxFormGroup;
    }

     getFormArray(){
      let formarray = this.userFormGroup.controls.skills as FormArray;
      return formarray.controls;
    }
    onSubmit()
    {
        this.userFormGroup.submitted = true;
    }
}
