import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';


@Component({
    selector: 'app-ipAsync-add-validator',
    templateUrl: './ip-async-add.component.html'
})
export class IpAsyncAddValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            ipV4:['', [],RxwebValidators.ipAsync({validatorConfig:of({version:1 })})], 
        });
    }
}
