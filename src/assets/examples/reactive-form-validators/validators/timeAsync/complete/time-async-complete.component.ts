import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-timeAsync-complete-validator',
    templateUrl: './time-async-complete.component.html'
})
export class TimeAsyncCompleteValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',[],], 
            totalOutTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({allowSeconds:true })})], 
            exitTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({message:'You can enter only time format data' })})], 
            netInTime:['',[], RxwebValidators.timeAsync({validatorConfig:of({messageKey:'timeMessageKey' })})], 
        });
    }
}
