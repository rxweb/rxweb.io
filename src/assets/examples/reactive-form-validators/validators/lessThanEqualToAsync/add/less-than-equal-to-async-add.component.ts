import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanEqualToAsync-add-validator',
    templateUrl: './less-than-equal-to-async-add.component.html'
})
export class LessThanEqualToAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            totalMarks:['',[],], 
            marks:['',[], RxwebValidators.lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks' })})], 
        });
    }
}
