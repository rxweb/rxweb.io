import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTime-allowSeconds-validator',
    templateUrl: './min-time-allow-seconds.component.html'
})
export class MinTimeAllowSecondsValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            totalOutTime:['', RxwebValidators.minTime({allowSeconds:true  ,value:'00:10:00' })], 
        });
    }
}
