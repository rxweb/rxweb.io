import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-endsWithAsync-add-validator',
    templateUrl: './ends-with-async-add.component.html'
})
export class EndsWithAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            name:['',[], RxwebValidators.endsWithAsync({validatorConfig:of({value:'t' })})], 
        });
    }
}
