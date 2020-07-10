import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators, required } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-conditionalControlDisable-complete-validator',
    templateUrl: './conditional-control-disable-complete.component.html'
})
export class ConditionalControlDisableCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            permanentAddress:['F-16, Victoria Lake',RxwebValidators.required()],
            IsSameAddress:[''],
            currentAddress:['', RxwebValidators.required({ disableExpression: (x, y) => { return x.IsSameAddress == true }})], 
        });
    }
}
