import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-startsWith-messageKey-validator',
    templateUrl: './starts-with-message-key.component.html'
})
export class StartsWithMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            skill:['', RxwebValidators.startsWith({value:'A'  ,messageKey:'startsWithMessageKey' })], 
        });
    }
}
