import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minDateAsync-operator-validator',
    templateUrl: './min-date-async-operator.component.html'
})
export class MinDateAsyncOperatorValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            confirmationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({value:'07/30/2018'  ,operator:'>' })})], 
        });
    }
}
