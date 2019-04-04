import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-formgroup-add',
    templateUrl: './formgroup-add.component.html'
})
export class FormgroupAddComponent implements OnInit {
    userInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        this.userInfoFormGroup = this.formBuilder.formGroup(user);
    }
}
