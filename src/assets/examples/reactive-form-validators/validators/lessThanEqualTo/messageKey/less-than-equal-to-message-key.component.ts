import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanEqualTo-messageKey-validator',
    templateUrl: './less-than-equal-to-message-key.component.html'
})
export class LessThanEqualToMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            disciplineMarks:['', RxwebValidators.lessThanEqualTo({fieldName:'totalMarks'  ,messageKey:'lessThanEqualToMessageKey' })], 
        });
    }
}
