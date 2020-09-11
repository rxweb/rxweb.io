import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTimeAsync-operator-validator',
    templateUrl: './max-time-async-operator.component.html'
})
export class MaxTimeAsyncOperatorValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            breakHours:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({operator:'<'  ,value:'00:10' })})], 
        });
    }
}
