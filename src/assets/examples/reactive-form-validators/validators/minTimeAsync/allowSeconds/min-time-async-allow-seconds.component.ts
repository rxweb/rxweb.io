import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTimeAsync-allowSeconds-validator',
    templateUrl: './min-time-async-allow-seconds.component.html'
})
export class MinTimeAsyncAllowSecondsValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            totalOutTime:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'00:10:00' })})], 
        });
    }
}
