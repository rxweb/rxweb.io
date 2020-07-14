import { Component, OnInit } from '@angular/core';
import { RxFormBuilder, RxFormGroup, RxFormControl } from '@rxweb/reactive-form-validators';

import { User, Address } from './user.model';

@Component({
    selector: 'app-backEndMessages-complete',
    templateUrl: './back-end-messages-complete.component.html'
})
export class BackEndMessagesCompleteComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder) { }

    ngOnInit() {
        let user = new User();
        user.address = new Address();
        this.userInfoFormGroup = <RxFormGroup>this.formBuilder.formGroup(User, { firstName: '', address: { areaName: '' } });
    }

    setFirstNameBackEndErrors() {
        (<RxFormControl>this.userInfoFormGroup.controls.firstName).setBackEndErrors({ invalidValue: 'The Entered value is Invalid' });
    }

    setAreaNameBackEndErrors() {
        (<RxFormControl>this.userInfoFormGroup.get('address')['controls'].areaName).setBackEndErrors({ invalidValue: 'The Entered value is Invalid' });
    }

    clearFirstNameBackEndErrors() {
        (<RxFormControl>this.userInfoFormGroup.controls.firstName).clearBackEndErrors();
    }

    clearAreaNameBackEndErrors() {
        (<RxFormControl>this.userInfoFormGroup.get('address')['controls'].areaName).clearBackEndErrors();
    }

}
