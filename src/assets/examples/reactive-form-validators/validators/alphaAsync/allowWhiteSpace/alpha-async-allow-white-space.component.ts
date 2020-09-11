import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-alphaAsync-allowWhiteSpace-validator',
    templateUrl: './alpha-async-allow-white-space.component.html'
})
export class AlphaAsyncAllowWhiteSpaceValidatorComponent implements OnInit {
    addressInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.addressInfoFormGroup = this.formBuilder.group({
            stateName:['',[], [RxwebValidators.alphaAsync({validatorConfig:of({allowWhiteSpace:true})})]]  
        });
    }
}
