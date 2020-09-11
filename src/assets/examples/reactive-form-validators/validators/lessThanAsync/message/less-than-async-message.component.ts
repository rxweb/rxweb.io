import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-lessThanAsync-message-validator',
    templateUrl: './less-than-async-message.component.html'
})
export class LessThanAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            otherMarks:['',[], RxwebValidators.lessThanAsync({validatorConfig:of({fieldName:'obtainedMarks'  ,message:'Please enter number greater than 100.' })})], 
        });
    }
}
