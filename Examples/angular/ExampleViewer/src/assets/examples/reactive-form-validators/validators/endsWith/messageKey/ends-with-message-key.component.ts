import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-endsWith-messageKey-validator',
    templateUrl: './ends-with-message-key.component.html'
})
export class EndsWithMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            skill:['', RxwebValidators.endsWith({value:'r'  ,messageKey:'endsWithMessageKey' })], 
        });
    }
}
