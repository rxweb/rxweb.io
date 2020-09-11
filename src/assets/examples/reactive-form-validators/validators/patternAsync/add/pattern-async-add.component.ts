import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-patternAsync-add-validator',
    templateUrl: './pattern-async-add.component.html'
})
export class PatternAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            userName:['',[], RxwebValidators.patternAsync({validatorConfig:of({expression:{'onlyAlpha': /^[A-Za-z]+$/} })})], 
        });
    }
}
