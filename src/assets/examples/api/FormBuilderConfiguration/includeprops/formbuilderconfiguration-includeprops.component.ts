import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { RxFormBuilder,FormBuilderConfiguration,RxFormGroup } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-formbuilderconfiguration-complete',
    templateUrl: './formbuilderconfiguration-includeprops.component.html'
})
export class FormbuilderconfigurationIncludepropsComponent implements OnInit {
    userInfoFormGroup: RxFormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        var formBuilderConfig = new FormBuilderConfiguration();
        formBuilderConfig.includeProps = ["firstName","lastName"]
        this.userInfoFormGroup = <RxFormGroup>this.formBuilder.formGroup(user,formBuilderConfig);
    }
}
