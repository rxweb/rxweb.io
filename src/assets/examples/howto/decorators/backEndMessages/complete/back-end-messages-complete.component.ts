import { Component, OnInit } from '@angular/core';
import { RxFormBuilder, RxFormGroup, RxFormControl, RxwebValidators } from '@rxweb/reactive-form-validators';

import { User, Address } from './user.model';

@Component({
    selector: 'app-backEndMessages-complete',
    templateUrl: './back-end-messages-complete.component.html'
})
export class BackEndMessagesCompleteComponent implements OnInit {
    userInfoFormGroup: RxFormGroup
    firstNameCount:any=''
    areaNameCount : any = ''
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

    getAreaNameErrors() {
        let validators = (<RxFormControl>this.userInfoFormGroup.get('address')['controls'].areaName).getValidators();
        validators.push(RxwebValidators.alpha());
        this.userInfoFormGroup.get('address')['controls'].areaName.setValidators(validators);
        this.areaNameCount = (<RxFormControl>this.userInfoFormGroup.get('address')['controls'].areaName).getValidators().length;
    }

    getFirstNamerrors() {
        let validators = (<RxFormControl>this.userInfoFormGroup.controls.firstName).getValidators();
          validators.push(RxwebValidators.alpha());
           this.userInfoFormGroup.controls.firstName.setValidators(validators);
           this.firstNameCount = (<RxFormControl>this.userInfoFormGroup.controls.firstName).getValidators().length;
      }

}
