import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators,RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-formbuilderconfiguration-abstractControlOptions',
    templateUrl: './formbuilderconfiguration-abstractControlOptions.component.html'
})
export class FormbuilderConfigurationAbstractControlOptionsComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            firstName:['', RxwebValidators.required()], 
        },{ abstractControlOptions: { firstName: 'blur' } });
       
    }

}
