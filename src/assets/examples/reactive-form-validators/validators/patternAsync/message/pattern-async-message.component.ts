import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-patternAsync-message-validator',
    templateUrl: './pattern-async-message.component.html'
})
export class PatternAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            zipCode:['',[], RxwebValidators.patternAsync({validatorConfig:of({expression:{'zipCode':/^[0-9]{5}(?:-[0-9]{4})?$/ }  ,message:'Zip code should match 12345 or 12345-6789' })})], 
        });
    }
}
