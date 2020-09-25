import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ipAsync-isCidr-validator',
    templateUrl: './ip-async-is-cidr.component.html'
})
export class IpAsyncIsCidrValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            ipV4Cidr:['', [], RxwebValidators.ipAsync({validatorConfig:of({version:1  ,isCidr:true })})], 
        });
    }
}
