import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,IFormGroup } from '@rxweb/reactive-form-validators';
import { User } from "./user.model"

@Component({
    selector: 'app-stronglyType-add',
    templateUrl: './strongly-type-add.component.html'
})
export class StronglyTypeAddComponent implements OnInit {

    userFormGroup: IFormGroup<User>

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup  = this.formBuilder.formGroup(User) as IFormGroup<User>;
        let user:User = this.userFormGroup.modelInstance;
       }

}