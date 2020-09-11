import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxTimeAsync-add-validator',
    templateUrl: './max-time-async-add.component.html'
})
export class MaxTimeAsyncAddValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryTime:['',[], RxwebValidators.maxTimeAsync({validatorConfig:of({value:'11:00' })})], 
        });
    }
}
