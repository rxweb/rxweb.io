import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-containsAsync-add-validator',
    templateUrl: './contains-async-add.component.html'
})
export class ContainsAsyncAddValidatorComponent implements OnInit {
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
