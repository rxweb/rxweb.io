import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { NumberInfo } from './number-info.model';

@Component({
    selector: 'app-primeNumber-messageKey',
    templateUrl: './prime-number-message-key.component.html'
})
export class PrimeNumberMessageKeyComponent implements OnInit {
    numberInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let numberInfo = new NumberInfo();
        this.numberInfoFormGroup = this.formBuilder.formGroup(numberInfo);
    }
}
