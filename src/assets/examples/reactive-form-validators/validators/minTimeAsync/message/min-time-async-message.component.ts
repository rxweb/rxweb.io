import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTimeAsync-message-validator',
    templateUrl: './min-time-async-message.component.html'
})
export class MinTimeAsyncMessageValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            exitTime:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({message:'You can enter only time format data greater than config value'  ,value:'07:00' })})], 
        });
    }
}
