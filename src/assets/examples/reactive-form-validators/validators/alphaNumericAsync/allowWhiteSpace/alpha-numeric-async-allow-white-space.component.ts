import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumericAsync-allowWhiteSpace-validator',
    templateUrl: './alpha-numeric-async-allow-white-space.component.html'
})
export class AlphaNumericAsyncAllowWhiteSpaceValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            flatAddress:['',[], RxwebValidators.alphaNumericAsync({validatorConfig:of({allowWhiteSpace:true })})], 
        });
    }
}
