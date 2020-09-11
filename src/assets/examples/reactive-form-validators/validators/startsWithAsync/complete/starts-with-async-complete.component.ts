import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { of } from 'rxjs';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-startsWithAsync-complete-validator',
    templateUrl: './starts-with-async-complete.component.html'
})
export class StartsWithAsyncCompleteValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            name:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'B' })})], 
            department:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'D'  ,isRestrict:true })})], 
            company:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'R'  ,message:'{{0}} does not starts with `R`' })})], 
            skill:['',[], RxwebValidators.startsWithAsync({validatorConfig:of({value:'A'  ,messageKey:'startsWithMessageKey' })})], 
        });
    }
}
