import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanEqualToAsync-messageKey-validator',
    templateUrl: './less-than-equal-to-async-message-key.component.html'
})
export class LessThanEqualToAsyncMessageKeyValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            disciplineMarks:['',[], RxwebValidators.lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks'  ,messageKey:'lessThanEqualToMessageKey' })})], 
        });
    }
}
