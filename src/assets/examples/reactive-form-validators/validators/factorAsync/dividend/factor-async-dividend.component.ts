import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-factorAsync-dividend-validator',
    templateUrl: './factor-async-dividend.component.html'
})
export class FactorAsyncDividendValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            fourthNumber:['',[], RxwebValidators.factorAsync({validatorConfig:of({dividend:50 })})], 
        });
    }
}
