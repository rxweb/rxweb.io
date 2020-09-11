import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxDateAsync-complete-validator',
    templateUrl: './max-date-async-complete.component.html'
})
export class MaxDateAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            userName:['',[],], 
            allocationDate:['',[], RxwebValidators.maxDateAsync({validatorConfig:of({value:'07/30/2018' })})], 
            registrationDate:['',[], RxwebValidators.maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,message:'{{0}} exceeds the Maximum Date Limit' })})], 
            enrollmentDate:['',[],], 
            lastRegistrationDate:['',[], RxwebValidators.maxDateAsync({validatorConfig:of({fieldName:'enrollmentDate' })})], 
            confirmationDate:['',[], RxwebValidators.maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,operator:'<' })})], 
            resignationDate:['',[], RxwebValidators.maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,messageKey:'maxDateMessageKey' })})], 
        });
    }
}
