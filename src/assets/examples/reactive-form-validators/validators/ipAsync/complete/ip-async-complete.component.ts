import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { of } from 'rxjs';

@Component({
    selector: 'app-ipAsync-complete-validator',
    templateUrl: './ip-async-complete.component.html'
})
export class IpAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

				ipTypes = [ "V4", "V6", "AnyOne",];
	
	
	
	
	
	
	
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            ipType:['',], 
            ipV4:['', RxwebValidators.ipAsync({validatorConfig:of({version:1 })})], 
            ipV6:['', RxwebValidators.ipAsync({validatorConfig:of({version:2 })})], 
            anyIPType:['', RxwebValidators.ipAsync({validatorConfig:of({version:3 })})], 
            ipV4Cidr:['', RxwebValidators.ipAsync({validatorConfig:of({version:1  ,isCidr:true })})], 
            ipV6Cidr:['', RxwebValidators.ipAsync({validatorConfig:of({version:2  ,isCidr:true })})], 
            ipV4Message:['', RxwebValidators.ipAsync({validatorConfig:of({version:1  ,message:'Please Enter IP V4 type Only' })})], 
            ipV6MessageKey:['', RxwebValidators.ipAsync({validatorConfig:of({version:2  ,messageKey:'ipMessageKey' })})], 
        });
    }
}
