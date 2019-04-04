import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Product } from './order.model';

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
        let product = new Product();
        this.userFormGroup = this.formBuilder.formGroup(product);
    }
}
