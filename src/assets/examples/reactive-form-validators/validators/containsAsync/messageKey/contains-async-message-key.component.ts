import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-containsAsync-messageKey-validator',
    templateUrl: './contains-async-message-key.component.html'
})
export class ContainsAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            organizationEmailAddress:['',[], RxwebValidators.containsAsync({validatorConfig:of({value:'@gmail.com'  ,messageKey:'containsMessageKey' })})], 
        });
    }
}
