import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-endsWithAsync-messageKey-validator',
    templateUrl: './ends-with-async-message-key.component.html'
})
export class EndsWithAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            skill:['',[], RxwebValidators.endsWithAsync({validatorConfig:of({value:'r'  ,messageKey:'endsWithMessageKey' })})], 
        });
    }
}
