import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanEqualToAsync-fieldName-validator',
    templateUrl: './less-than-equal-to-async-field-name.component.html'
})
export class LessThanEqualToAsyncFieldNameValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            totalMarks:['',[],], 
            passingMarks:['',[], RxwebValidators.lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks' })})], 
        });
    }
}
