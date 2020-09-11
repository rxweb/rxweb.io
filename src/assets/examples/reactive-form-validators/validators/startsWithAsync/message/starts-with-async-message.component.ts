import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-startsWithAsync-message-validator',
    templateUrl: './starts-with-async-message.component.html'
})
export class StartsWithAsyncMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            company:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'R'  ,message:'{{0}} does not starts with `R`' })})], 
        });
    }
}
