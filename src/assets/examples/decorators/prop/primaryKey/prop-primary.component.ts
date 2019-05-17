import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,RxFormGroup } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-prop-primary',
    templateUrl: './prop-primary.component.html'
})
export class PropPrimaryComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        user.userId = 1;
        this.userInfoFormGroup = <RxFormGroup>this.formBuilder.formGroup(user); 
    }
}
