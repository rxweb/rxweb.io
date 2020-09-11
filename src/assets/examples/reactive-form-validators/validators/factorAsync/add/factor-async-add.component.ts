import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-factorAsync-add-validator',
    templateUrl: './factor-async-add.component.html'
})
export class FactorAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstNumber:['',[], RxwebValidators.factorAsync({validatorConfig:of({dividend:50 })})], 
        });
    }
}
