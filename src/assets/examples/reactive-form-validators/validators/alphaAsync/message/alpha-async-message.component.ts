import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-alphaAsync-message-validator',
    templateUrl: './alpha-async-message.component.html'
})
export class AlphaAsyncMessageValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            stateCode:['',[], [RxwebValidators.alphaAsync({validatorConfig:of({message:"Only Alphabets are allowed"})})]]  , 
        });
    }
}
