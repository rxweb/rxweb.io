import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-minTimeAsync-add-validator',
    templateUrl: './min-time-async-add.component.html'
})
export class MinTimeAsyncAddValidatorComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.attandanceDetailFormGroup = this.formBuilder.group({
            entryTime:['',[], RxwebValidators.minTimeAsync({validatorConfig:of({value:'08:00' })})], 
        });
    }
}
