import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTimeAsync-allowSeconds-validator',
    templateUrl: './max-time-async-allow-seconds.component.html'
})
export class MaxTimeAsyncAllowSecondsValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            totalOutTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'02:00:00' })})], 
        });
    }
}
