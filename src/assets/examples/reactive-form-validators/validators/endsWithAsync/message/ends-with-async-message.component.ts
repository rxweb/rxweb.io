import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-endsWithAsync-message-validator',
    templateUrl: './ends-with-async-message.component.html'
})
export class EndsWithAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            company:['',[], RxwebValidators.endsWithAsync({validatorConfig:of({value:'b'  ,message:'{{0}} does not ends with `b`' })})], 
        });
    }
}
