import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-endsWithAsync-complete-validator',
    templateUrl: './ends-with-async-complete.component.html'
})
export class EndsWithAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            name:['',[], RxwebValidators.endsWithAsync({validatorConfig:of({value:'t' })})], 
            company:['',[], RxwebValidators.endsWithAsync({validatorConfig:of({value:'b'  ,message:'{{0}} does not ends with `b`' })})], 
            skill:['',[], RxwebValidators.endsWithAsync({validatorConfig:of({value:'r'  ,messageKey:'endsWithMessageKey' })})], 
        });
    }
}
