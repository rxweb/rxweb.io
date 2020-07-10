import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTime-allowSeconds-validator',
    templateUrl: './max-time-allow-seconds.component.html'
})
export class MaxTimeAllowSecondsValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            totalOutTime:['', RxwebValidators.maxTime({allowSeconds:true  ,value:'02:00:00' })], 
        });
    }
}
