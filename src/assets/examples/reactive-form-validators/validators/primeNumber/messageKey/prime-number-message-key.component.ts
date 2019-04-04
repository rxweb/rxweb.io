import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-primeNumber-messageKey-validator',
    templateUrl: './prime-number-message-key.component.html'
})
export class PrimeNumberMessageKeyValidatorComponent implements OnInit {
    numberInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.numberInfoFormGroup = this.formBuilder.group({
            fourthNumber:['', RxwebValidators.primeNumber({messageKey:'primeNumberMessageKey' })], 
        });
    }
}
