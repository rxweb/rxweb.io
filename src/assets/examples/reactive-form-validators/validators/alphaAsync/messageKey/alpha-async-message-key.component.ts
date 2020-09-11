import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-alphaAsync-messageKey-validator',
    templateUrl: './alpha-async-message-key.component.html'
})
export class AlphaAsyncMessageKeyValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            cityCode:['',[], [RxwebValidators.alphaAsync({validatorConfig:of({messageKey:"AlphaMessageKey"})})]]  , 
        });
    }
}
