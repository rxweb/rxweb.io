import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualToAsync-add-validator',
    templateUrl: './greater-than-equal-to-async-add.component.html'
})
export class GreaterThanEqualToAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            age:['',[],], 
            voterAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'age' })})], 
        });
    }
}
