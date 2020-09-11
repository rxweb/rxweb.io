import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanAsync-messageKey-validator',
    templateUrl: './less-than-async-message-key.component.html'
})
export class LessThanAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            disciplineMarks:['',[], RxwebValidators.lessThanAsync({validatorConfig:of({fieldName:'obtainedMarks'  ,messageKey:'lessThanMessageKey' })})], 
        });
    }
}
