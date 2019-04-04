import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-compare-messageKey-validator',
    templateUrl: './compare-message-key.component.html'
})
export class CompareMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            confirmContactNumber:['', RxwebValidators.compare({fieldName:'contactNumber'  ,messageKey:'compareMessageKey' })], 
        });
    }
}
