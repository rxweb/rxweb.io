import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { User,Progression } from './user.model';

@Component({
    selector: 'app-greaterThanLessThanFormArray-complete',
    templateUrl: './greater-than-less-than-form-array-complete.component.html'
})
export class GreaterThanLessThanFormArrayCompleteComponent implements OnInit {

    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let user = new User();
        user.progressions = new Array<Progression>();
        let progression = new Progression();
        user.progressions.push(progression);
        this.userFormGroup = this.formBuilder.formGroup(user);
        }

    addIndex(){
      let progressions = this.userFormGroup.controls.progressions as FormArray;
      progressions.push(this.formBuilder.formGroup(Progression));
    }

  
}
