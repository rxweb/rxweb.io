import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-timeAsync-allowSeconds-validator',
    templateUrl: './time-async-allow-seconds.component.html'
})
export class TimeAsyncAllowSecondsValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            totalOutTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({allowSeconds:true })})], 
        });
    }
}
