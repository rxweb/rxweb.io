import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxNumberAsync-messageKey-validator',
    templateUrl: './max-number-async-message-key.component.html'
})
export class MaxNumberAsyncMessageKeyValidatorComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.subjectDetailsFormGroup = this.formBuilder.group({
            disciplineMarks:['',[], RxwebValidators.maxNumberAsync({validatorConfig:of({value:50  ,messageKey:'maxNumberMessageKey' })})], 
        });
    }
}
