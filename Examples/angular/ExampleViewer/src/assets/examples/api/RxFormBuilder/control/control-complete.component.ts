import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators,ValidationAlphabetLocale,RxFormBuilder,RxFormGroup } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-control-complete',
    templateUrl: './control-complete.component.html'
})
export class ControlCompleteComponent implements OnInit {
    countryFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
    let countryName = this.formBuilder.control('', [RxwebValidators.required()]);
        this.countryFormGroup = this.formBuilder.group({
          countryName 
        });
    }
}
