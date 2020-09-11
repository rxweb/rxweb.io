import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-startsWithAsync-value-validator',
    templateUrl: './starts-with-async-value.component.html'
})
export class StartsWithAsyncValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            name:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'B' })})], 
        });
    }
}
