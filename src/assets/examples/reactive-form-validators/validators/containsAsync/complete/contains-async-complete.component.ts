import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-containsAsync-complete-validator',
    templateUrl: './contains-async-complete.component.html'
})
export class ContainsAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            emailAddress:['',[], RxwebValidators.containsAsync({validatorConfig:of({value:'@gmail.com' })})], 
            otherEmailAddress:['',[], RxwebValidators.containsAsync({validatorConfig:of({value:'@gmail.com'  ,message:'Please enter valid gmailId' })})], 
            organizationEmailAddress:['',[], RxwebValidators.containsAsync({validatorConfig:of({value:'@gmail.com'  ,messageKey:'containsMessageKey' })})], 
        });
    }
}
