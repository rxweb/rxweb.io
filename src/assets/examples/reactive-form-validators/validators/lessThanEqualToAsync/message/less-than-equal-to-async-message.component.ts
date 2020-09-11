import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanEqualToAsync-message-validator',
    templateUrl: './less-than-equal-to-async-message.component.html'
})
export class LessThanEqualToAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            otherMarks:['',[], RxwebValidators.lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks'  ,message:'Please enter number less than 100.' })})], 
        });
    }
}
