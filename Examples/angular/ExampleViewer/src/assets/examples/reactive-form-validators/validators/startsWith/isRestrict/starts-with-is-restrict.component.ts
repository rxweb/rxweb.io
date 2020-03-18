import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-startsWith-isRestrict-validator',
    templateUrl: './starts-with-is-restrict.component.html'
})
export class StartsWithIsRestrictValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            department:['', RxwebValidators.startsWith({value:'D'  ,isRestrict:true })], 
        });
    }
}
