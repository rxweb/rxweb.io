import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minLengthAsync-message-validator',
    templateUrl: './min-length-async-message.component.html'
})
export class MinLengthAsyncMessageValidatorComponent implements OnInit {
    contactFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.contactFormGroup = this.formBuilder.group({
            landLineNo:['',[], RxwebValidators.minLengthAsync({validatorConfig:of({value:8  ,message:'Minimum 8 characters are allowed' })})], 
        });
    }
}
