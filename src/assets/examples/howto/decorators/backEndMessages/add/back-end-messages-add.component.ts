import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms"
import { RxFormBuilder, RxFormGroup, RxFormControl } from '@rxweb/reactive-form-validators';

import { User, Address } from './user.model';

@Component({
    selector: 'app-backEndMessages-add',
    templateUrl: './back-end-messages-add.complete.html'
})
export class BackEndMessagesAddComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder) { }

    ngOnInit() {
        let user = new User();
        user.address = new Address();
        this.userInfoFormGroup = <RxFormGroup>this.formBuilder.formGroup(User, { firstName: '', address: { areaName: '' } });
    }

    setEndErrors() {

        this.userInfoFormGroup.setBackEndErrors(
            {
                address: { areaName: { 'required': 'Invalid City' } },
                firstName: { 'required': 'The entered value is Invalid' }
            });
    }


    clearBackEndErrors() {
        this.userInfoFormGroup.clearBackEndErrors();
    }

}
