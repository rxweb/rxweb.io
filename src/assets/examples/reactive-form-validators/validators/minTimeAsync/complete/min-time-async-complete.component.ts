import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTimeAsync-complete-validator',
    templateUrl: './min-time-async-complete.component.html'
})
export class MinTimeAsyncCompleteValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryPlace:['',[],], 
            openingTime:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({value:'08:00' })})], 
            requiredHours:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({operator:'>'  ,value:'08:30' })})], 
            totalOutTime:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'00:10:00' })})], 
            exitTime:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({message:'You can enter only time format data greater than config value'  ,value:'07:00' })})], 
            netInTime:['',[],], 
        });
    }
}
