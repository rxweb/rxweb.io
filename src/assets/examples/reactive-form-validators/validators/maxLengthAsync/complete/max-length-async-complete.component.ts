import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxLengthAsync-complete-validator',
    templateUrl: './max-length-async-complete.component.html'
})
export class MaxLengthAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            firstName:['',[], RxwebValidators.maxLengthAsync({validatorConfig:of({value:16 })})], 
            userName:['',[], RxwebValidators.maxLengthAsync({validatorConfig:of({value:10  ,message:'Maximum 10 characters are allowed' })})], 
            fullName:['',[], RxwebValidators.maxLengthAsync({validatorConfig:of({value:20  ,messageKey:'maxLengthMessageKey' })})], 
        });
    }
}
