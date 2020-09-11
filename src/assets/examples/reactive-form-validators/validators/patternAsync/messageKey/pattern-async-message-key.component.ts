import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-patternAsync-messageKey-validator',
    templateUrl: './pattern-async-message-key.component.html'
})
export class PatternAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            pinCode:['',[], RxwebValidators.patternAsync({validatorConfig:of({expression:{'pinCode':/^[1-9][0-9]{5}$/ }  ,messageKey:'patternMessageKey' })})], 
        });
    }
}
