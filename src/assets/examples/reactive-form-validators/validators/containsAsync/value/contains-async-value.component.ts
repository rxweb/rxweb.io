import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-containsAsync-value-validator',
    templateUrl: './contains-async-value.component.html'
})
export class ContainsAsyncValueValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            emailAddress:['',[], RxwebValidators.containsAsync({validatorConfig:of({value:'@gmail.com' })})], 
        });
    }
}
