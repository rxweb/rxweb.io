import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTime-message-validator',
    templateUrl: './max-time-message.component.html'
})
export class MaxTimeMessageValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            closingTime:['', RxwebValidators.maxTime({value:'23:30' })], 
            exitTime:['', RxwebValidators.maxTime({message:'Please enter valid input'  ,fieldName:'closingTime' })], 
        });
    }
}
