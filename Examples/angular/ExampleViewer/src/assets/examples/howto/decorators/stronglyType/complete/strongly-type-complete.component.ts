import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"

import { RxFormBuilder,IFormGroup } from '@rxweb/reactive-form-validators';
import { User } from "./user.model"

@Component({
    selector: 'app-stronglyType-complete',
    templateUrl: './strongly-type-complete.component.html'
})
export class StronglyTypeCompleteComponent implements OnInit {

    userFormGroup: IFormGroup<User>

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup  = this.formBuilder.formGroup(User) as IFormGroup<User>;
        let user:User = this.userFormGroup.modelInstance;
       }

}