import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minNumberAsync-message-validator',
    templateUrl: './min-number-async-message.component.html'
})
export class MinNumberAsyncMessageValidatorComponent implements OnInit {
    resultInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.resultInfoFormGroup = this.formBuilder.group({
            science:['',[], RxwebValidators.minNumberAsync({validatorConfig:of({value:35  ,message:'Number should not be less than 35' })})], 
        });
    }
}
