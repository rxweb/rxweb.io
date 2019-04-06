import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Order } from './order.model';

@Component({
    selector: 'app-class-complete',
    templateUrl: './class-complete.component.html'
})
export class ClassCompleteComponent implements OnInit {

    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let order = new Order();
        this.userFormGroup = this.formBuilder.formGroup(order);
    }
}
