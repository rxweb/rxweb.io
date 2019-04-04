import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-and-add-validator',
    templateUrl: './and-add.component.html'
})
export class AndAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            flatAddress:['', RxwebValidators.and({validation:{alphaNumeric:{allowWhiteSpace:true},maxLength:{value:50}}})]
        });
    }
}