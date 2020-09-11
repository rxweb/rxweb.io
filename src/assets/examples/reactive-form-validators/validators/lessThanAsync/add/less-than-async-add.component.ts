import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanAsync-add-validator',
    templateUrl: './less-than-async-add.component.html'
})
export class LessThanAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            marks:['',[],], 
            passingMarks:['',[], RxwebValidators.lessThanAsync({validatorConfig:of({fieldName:'marks' })})], 
        });
    }
}
