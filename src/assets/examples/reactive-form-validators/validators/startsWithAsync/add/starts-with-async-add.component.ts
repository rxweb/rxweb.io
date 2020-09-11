import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-startsWithAsync-add-validator',
    templateUrl: './starts-with-async-add.component.html'
})
export class StartsWithAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            name:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'n' })})], 
        });
    }
}
