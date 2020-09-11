import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTimeAsync-fieldName-validator',
    templateUrl: './max-time-async-field-name.component.html'
})
export class MaxTimeAsyncFieldNameValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            closingTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({value:'23:30' })})], 
            exitTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({message:'You can enter only time format data'  ,fieldName:'closingTime' })})], 
        });
    }
}
