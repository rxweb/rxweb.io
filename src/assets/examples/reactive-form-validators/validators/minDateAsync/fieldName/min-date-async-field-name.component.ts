import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minDateAsync-fieldName-validator',
    templateUrl: './min-date-async-field-name.component.html'
})
export class MinDateAsyncFieldNameValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            enrollmentDate:['',[],], 
            lastRegistrationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({fieldName:'enrollmentDate' })})], 
        });
    }
}
