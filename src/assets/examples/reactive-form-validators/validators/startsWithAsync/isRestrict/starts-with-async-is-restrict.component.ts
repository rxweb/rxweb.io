import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-startsWithAsync-isRestrict-validator',
    templateUrl: './starts-with-async-is-restrict.component.html'
})
export class StartsWithAsyncIsRestrictValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            department:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'D'  ,isRestrict:true })})], 
        });
    }
}
