import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxLengthAsync-message-validator',
    templateUrl: './max-length-async-message.component.html'
})
export class MaxLengthAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            userName:['',[], RxwebValidators.maxLengthAsync({validatorConfig:of({value:10  ,message:'Maximum 10 characters are allowed' })})], 
        });
    }
}
