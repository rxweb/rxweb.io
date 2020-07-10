import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-pattern-messageKey-validator',
    templateUrl: './pattern-message-key.component.html'
})
export class PatternMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            pinCode:['', RxwebValidators.pattern({expression:{'pinCode':/^[1-9][0-9]{5}$/ }  ,messageKey:'patternMessageKey' })], 
        });
    }
}
