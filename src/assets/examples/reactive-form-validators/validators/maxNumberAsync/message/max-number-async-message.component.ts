import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxNumberAsync-message-validator',
    templateUrl: './max-number-async-message.component.html'
})
export class MaxNumberAsyncMessageValidatorComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.subjectDetailsFormGroup = this.formBuilder.group({
            practicalMarks:['',[], RxwebValidators.maxNumberAsync({validatorConfig:of({value:70  ,message:'{{0}} exceeds the Maximum marks Limit' })})], 
        });
    }
}
