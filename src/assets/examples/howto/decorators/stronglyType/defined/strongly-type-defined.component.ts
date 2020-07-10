import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,IFormGroup } from '@rxweb/reactive-form-validators';
import { User } from "./user.model"

@Component({
    selector: 'app-stronglyType-defined',
    templateUrl: './strongly-type-defined.component.html'
})
export class StronglyTypeDefinedComponent implements OnInit {
    acceptCookies =[{"text":"Yes",value:"True"},{"text":"No",value:"false"}];
    userFormGroup: IFormGroup<User>

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup  = this.formBuilder.formGroup(User) as IFormGroup<User>;
    }

}