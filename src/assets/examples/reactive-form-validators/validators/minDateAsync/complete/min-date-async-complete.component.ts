import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minDateAsync-complete-validator',
    templateUrl: './min-date-async-complete.component.html'
})
export class MinDateAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            userName:['',[],], 
            allocationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({value:'07/30/2018' })})], 
            registrationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({value:'07/30/2018'  ,message:'{{0}} exceeds the Minimum Date Limit' })})], 
            enrollmentDate:['',[],], 
            lastRegistrationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({fieldName:'enrollmentDate' })})], 
            confirmationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({value:'07/30/2018'  ,operator:'>' })})], 
            resignationDate:['',[], RxwebValidators.minDateAsync({validatorConfig:of({value:'07/30/2018'  ,messageKey:'minDateMessageKey' })})], 
        });
    }
}
