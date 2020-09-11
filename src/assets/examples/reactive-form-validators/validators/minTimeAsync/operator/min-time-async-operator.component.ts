import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTimeAsync-operator-validator',
    templateUrl: './min-time-async-operator.component.html'
})
export class MinTimeAsyncOperatorValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            requiredHours:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({operator:'>'  ,value:'08:30' })})], 
        });
    }
}
