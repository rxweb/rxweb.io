import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-alphaNumericAsync-add-validator',
    templateUrl: './alpha-numeric-async-add.component.html'
})
export class AlphaNumericAsyncAddValidatorComponent implements OnInit {
    locationFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.locationFormGroup = this.formBuilder.group({
            areaName:['',[], RxwebValidators.alphaNumericAsync()], 
        });
    }
}
