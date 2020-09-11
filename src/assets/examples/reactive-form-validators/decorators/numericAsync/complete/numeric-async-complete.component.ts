import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-numericAsync-complete',
    templateUrl: './numeric-async-complete.component.html'
})
export class NumericAsyncCompleteComponent implements OnInit {
    userInfoFormGroup: FormGroup
				dataTypes = [ "Real", "Integer",];

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let userInfo = new UserInfo();
        this.userInfoFormGroup = this.formBuilder.formGroup(userInfo);
    }
}
