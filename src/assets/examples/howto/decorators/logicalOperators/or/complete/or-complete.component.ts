import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import {RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-or-complete',
    templateUrl: './or-complete.component.html'
})
export class OrCompleteComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        this.userInfoFormGroup = this.formBuilder.formGroup(user);
    }
}
