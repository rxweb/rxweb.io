import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-ngxTranslateValidationMessage-complete-validator',
    templateUrl: './ngx-translate-validation-message-complete.component.html'
})
export class NgxTranslateValidationMessageCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            fullName:['', RxwebValidators.required({messageKey:'requiredMessageKey',isAddMessageKey:true })], 
        });
    }
}
