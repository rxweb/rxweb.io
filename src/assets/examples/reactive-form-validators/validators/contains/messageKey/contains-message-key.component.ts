import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-contains-messageKey-validator',
    templateUrl: './contains-message-key.component.html'
})
export class ContainsMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            organizationEmailAddress:['', RxwebValidators.contains({value:'@gmail.com'  ,messageKey:'containsMessageKey' })], 
        });
    }
}
