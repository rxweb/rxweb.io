import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanAsync-fieldName-validator',
    templateUrl: './less-than-async-field-name.component.html'
})
export class LessThanAsyncFieldNameValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            obtainedMarks:['',[],], 
            otherActivityMarks:['',[], RxwebValidators.lessThanAsync({validatorConfig:of({fieldName:'obtainedMarks' })})], 
        });
    }
}
