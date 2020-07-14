import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms"
import { RxFormBuilder, RxFormGroup, RxwebValidators, RxFormControl } from '@rxweb/reactive-form-validators';


@Component({
    selector: 'app--backEndMessages-add-validator',
    templateUrl: './back-end-messages-add.component.html'
})
export class BackEndMessagesAddValidatorComponent implements OnInit {
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
