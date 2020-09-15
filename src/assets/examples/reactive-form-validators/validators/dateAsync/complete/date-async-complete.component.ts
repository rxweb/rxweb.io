import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-dateAsync-complete-validator',
    templateUrl: './date-async-complete.component.html'
})
export class DateAsyncCompleteValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            birthDate:['', RxwebValidators.dateAsync()], 
            registrationDate:['', RxwebValidators.dateAsync({validatorConfig:of({allowISODate:true })})], 
            admissionDate:['', RxwebValidators.dateAsync({validatorConfig:of({conditionalExpression:(x,y) => x.birthDate == "16/04/1997"  })})], 
            allocationDate:['', RxwebValidators.dateAsync({validatorConfig:of({message:'{{0}} is not a valid date' })})], 
            confirmationDate:['', RxwebValidators.dateAsync({validatorConfig:of({messageKey:'dateMessageKey' })})], 
        });
    }
}
