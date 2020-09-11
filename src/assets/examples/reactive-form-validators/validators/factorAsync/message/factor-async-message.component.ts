import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-factorAsync-message-validator',
    templateUrl: './factor-async-message.component.html'
})
export class FactorAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            sixthNumber:['',[], RxwebValidators.factorAsync({validatorConfig:of({dividend:30  ,message:'{{0}} is not a factor of 50' })})], 
        });
    }
}
