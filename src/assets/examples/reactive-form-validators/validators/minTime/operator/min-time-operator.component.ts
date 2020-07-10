import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTime-operator-validator',
    templateUrl: './min-time-operator.component.html'
})
export class MinTimeOperatorValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            requiredHours:['', RxwebValidators.minTime({operator:'>'  ,value:'08:30' })], 
        });
    }
}
