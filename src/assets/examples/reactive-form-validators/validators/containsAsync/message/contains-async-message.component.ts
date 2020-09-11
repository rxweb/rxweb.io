import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-containsAsync-message-validator',
    templateUrl: './contains-async-message.component.html'
})
export class ContainsAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            otherEmailAddress:['',[], RxwebValidators.containsAsync({validatorConfig:of({value:'@gmail.com'  ,message:'Please enter valid gmailId' })})], 
        });
    }
}
