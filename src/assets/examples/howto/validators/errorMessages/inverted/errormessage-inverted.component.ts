import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms"
import { RxwebValidators,RxFormBuilder ,IFormGroup} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-errormessage-inverted-validator',
    templateUrl: './errormessage-inverted.component.html'
})
export class ErrormessageInvertedValidatorComponent implements OnInit {
    userFormGroup: IFormGroup<any>

	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            userName:['', RxwebValidators.required() ]
        }) as IFormGroup<any>;
      
    }
}
