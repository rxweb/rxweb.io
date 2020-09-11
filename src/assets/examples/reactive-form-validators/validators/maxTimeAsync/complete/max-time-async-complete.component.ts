import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTimeAsync-complete-validator',
    templateUrl: './max-time-async-complete.component.html'
})
export class MaxTimeAsyncCompleteValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',[],], 
            closingTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({value:'23:30' })})], 
            breakHours:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({operator:'<'  ,value:'00:10' })})], 
            totalOutTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'02:00:00' })})], 
            exitTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({message:'You can enter only time format data'  ,fieldName:'closingTime' })})], 
            netInTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime' })})], 
        });
    }
}
