import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTimeAsync-message-validator',
    templateUrl: './max-time-async-message.component.html'
})
export class MaxTimeAsyncMessageValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            exitTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({message:'You can enter only time format data'  ,fieldName:'closingTime' })})], 
        });
    }
}
