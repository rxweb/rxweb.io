import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThan-messageKey-validator',
    templateUrl: './less-than-message-key.component.html'
})
export class LessThanMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            obtainedMarks:['',], 
            disciplineMarks:['', RxwebValidators.lessThan({fieldName:'obtainedMarks'  ,messageKey:'lessThanMessageKey' })], 
        });
    }
}
