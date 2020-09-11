import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanAsync-add-validator',
    templateUrl: './greater-than-async-add.component.html'
})
export class GreaterThanAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            age:['',[],], 
            voterAge:['',[], RxwebValidators.greaterThanAsync({validatorConfig:of({fieldName:'age' })})], 
        });
    }
}
