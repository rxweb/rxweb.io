import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-startsWithAsync-messageKey-validator',
    templateUrl: './starts-with-async-message-key.component.html'
})
export class StartsWithAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            skill:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'A'  ,messageKey:'startsWithMessageKey' })})], 
        });
    }
}
