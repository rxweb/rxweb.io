import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms"
import { RxFormBuilder, RxFormGroup, RxwebValidators, RxFormControl } from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app-backEndMessages-complete-validator',
    templateUrl: './back-end-messages-complete.component.html'
})
export class BackEndMessagesCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder) { }

    ngOnInit() {
        this.userInfoFormGroup = <RxFormGroup>this.formBuilder.group({
            firstName: ['', RxwebValidators.required()],
            address: <RxFormGroup>this.formBuilder.group({
                areaName: ['', RxwebValidators.required()]
            })
        });
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
