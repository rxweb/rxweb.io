import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-numeric-decimalSeperator',
    templateUrl: './numeric-decimal-seperator.component.html'
})
export class NumericDecimalSeperatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let userInfo = new UserInfo();
        userInfo.totalAmount = 125.25;
         this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
    }

   
}