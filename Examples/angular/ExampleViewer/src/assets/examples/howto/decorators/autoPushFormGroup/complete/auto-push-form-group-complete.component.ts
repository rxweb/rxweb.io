import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray } from "@angular/forms"
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { User,Cart } from './user.model';

@Component({
    selector: 'app-autoPushFormGroup-complete',
    templateUrl: './auto-push-form-group-complete.component.html'
})
export class AutoPushFormGroupCompleteComponent implements OnInit {

    userFormGroup: FormGroup
    user: User;
    constructor(
        private formBuilder: RxFormBuilder) { }

    ngOnInit() {
      
        this.user = new User();
        this.user.carts = new Array<Cart>();
        this.user.carts.push(new Cart());
        this.userFormGroup = this.formBuilder.formGroup(this.user);
    }

    addCartItem() {
      this.user.carts.push( new Cart());
    }
}
