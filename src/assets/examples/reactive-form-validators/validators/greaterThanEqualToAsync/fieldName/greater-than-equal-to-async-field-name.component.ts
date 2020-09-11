import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-greaterThanEqualToAsync-fieldName-validator',
    templateUrl: './greater-than-equal-to-async-field-name.component.html'
})
export class GreaterThanEqualToAsyncFieldNameValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            admissionAge:['',[],], 
            retiermentAge:['',[], RxwebValidators.greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge' })})], 
        });
    }
}
