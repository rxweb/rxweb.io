import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxNumber-messageKey-validator',
    templateUrl: './max-number-message-key.component.html'
})
export class MaxNumberMessageKeyValidatorComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.subjectDetailsFormGroup = this.formBuilder.group({
            disciplineMarks:['', RxwebValidators.maxNumber({value:50  ,messageKey:'maxNumberMessageKey' })], 
        });
    }
}
