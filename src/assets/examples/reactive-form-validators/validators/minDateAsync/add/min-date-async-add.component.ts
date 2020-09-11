import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minDateAsync-add-validator',
    templateUrl: './min-date-async-add.component.html'
})
export class MinDateAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            registrationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({value:'07/30/2018' })})], 
        });
    }
}
