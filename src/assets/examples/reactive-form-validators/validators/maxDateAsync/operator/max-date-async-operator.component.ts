import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxDateAsync-operator-validator',
    templateUrl: './max-date-async-operator.component.html'
})
export class MaxDateAsyncOperatorValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            confirmationDate:['',[], RxwebValidators.maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,operator:'<' })})], 
        });
    }
}
