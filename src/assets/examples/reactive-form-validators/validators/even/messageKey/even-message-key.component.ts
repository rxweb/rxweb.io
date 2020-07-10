import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-even-messageKey-validator',
    templateUrl: './even-message-key.component.html'
})
export class EvenMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            otherEvenNumber:['', RxwebValidators.even({messageKey:'evenMessageKey' })], 
        });
    }
}
