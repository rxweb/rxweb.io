import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaAsync-add-validator',
    templateUrl: './alpha-async-add.component.html'
})
export class AlphaAsyncAddValidatorComponent implements OnInit {
    countryFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.countryFormGroup = this.formBuilder.group({
            countryName:['',[], RxwebValidators.alphaAsync()], 
        });
        console.log(this.countryFormGroup);
    }
}
