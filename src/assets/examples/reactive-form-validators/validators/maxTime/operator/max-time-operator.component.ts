import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTime-operator-validator',
    templateUrl: './max-time-operator.component.html'
})
export class MaxTimeOperatorValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            breakHours:['', RxwebValidators.maxTime({operator:'<'  ,value:'00:10' })], 
        });
    }
}
