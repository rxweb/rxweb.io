import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-timeAsync-message-validator',
    templateUrl: './time-async-message.component.html'
})
export class TimeAsyncMessageValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            exitTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({message:'You can enter only time format data' })})], 
        });
    }
}
