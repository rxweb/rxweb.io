import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-factorAsync-fieldName-validator',
    templateUrl: './factor-async-field-name.component.html'
})
export class FactorAsyncFieldNameValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstNumber:['',[],], 
            fifthNumber:['',[], RxwebValidators.factorAsync({validatorConfig:of({fieldName:'firstNumber' })})], 
        });
    }
}
