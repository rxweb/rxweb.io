import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTime-message-validator',
    templateUrl: './min-time-message.component.html'
})
export class MinTimeMessageValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            exitTime:['', RxwebValidators.minTime({message:'You can enter only time format data greater than config value'  ,value:'07:00' })], 
        });
    }
}
