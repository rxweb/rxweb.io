import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxNumberAsync-complete-validator',
    templateUrl: './max-number-async-complete.component.html'
})
export class MaxNumberAsyncCompleteValidatorComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.subjectDetailsFormGroup = this.formBuilder.group({
            subjectCode:['',[],], 
            passingMarks:['',[], RxwebValidators.maxNumberAsync({validatorConfig:of({value:50 })})], 
            practicalMarks:['',[], RxwebValidators.maxNumberAsync({validatorConfig:of({value:70  ,message:'{{0}} exceeds the Maximum marks Limit' })})], 
            disciplineMarks:['',[], RxwebValidators.maxNumberAsync({validatorConfig:of({value:50  ,messageKey:'maxNumberMessageKey' })})], 
        });
    }
}
